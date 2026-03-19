# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: install ALL dependencies and build frontend with webpack
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

# Copy all source files (filtered by .dockerignore)
COPY . .

RUN npm run build

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: install production dependencies only
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-slim AS deps

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts

# ─────────────────────────────────────────────────────────────────────────────
# Stage 3: final image — copy server + built frontend + prod node_modules
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-slim AS final

# Security: run as a non-root user
RUN groupadd --system appgroup && useradd --system --gid appgroup appuser

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
  CMD node -e "const http=require('http');http.get('http://localhost:'+(process.env.PORT||3000)+'/',(r)=>{process.exit(r.statusCode===200?0:1)}).on('error',()=>process.exit(1))"

# Start the server in production mode
CMD ["npm", "start"]
