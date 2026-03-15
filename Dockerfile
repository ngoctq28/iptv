# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: install ALL dependencies and build frontend with webpack
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Copy source files needed for the webpack build
COPY webpack.config.js ./
COPY src/              ./src/
COPY index.html        ./
COPY panel.js          ./
COPY hls.light.min.js  ./
COPY sw.js             ./
COPY manifest.json     ./
COPY icon.svg          ./
COPY icon-192.png      ./
COPY icon-512.png      ./

RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: install production dependencies only
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: final image — copy server + built frontend + prod node_modules
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS final

# Security: run as a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy production node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy server
COPY package.json ./
COPY server.js    ./

# Copy webpack build output
COPY --from=build /app/dist ./dist

# Use the non-root user
USER appuser

# Run in production mode: silences console.log/warn in both server.js and the browser
ENV NODE_ENV=production

# Expose the port the server listens on (default 3000, overridable via PORT env)
EXPOSE 3000

# Health check — hits the root route every 30 s
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost:${PORT:-3000}/ > /dev/null || exit 1

# Start the server in production mode
CMD ["npm", "start"]
