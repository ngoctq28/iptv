# ─────────────────────────────────────────────────────────────────────────────
# Stage 1: install production dependencies only
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS deps

WORKDIR /app

# Copy manifest files only — Docker cache-layer trick:
# re-runs npm ci only when package*.json changes, not on every source change.
COPY package.json package-lock.json ./

# Install *only* production deps (no devDependencies, no postinstall scripts)
RUN npm ci --omit=dev --ignore-scripts

# ─────────────────────────────────────────────────────────────────────────────
# Stage 2: final image — copy app source + pre-built node_modules
# ─────────────────────────────────────────────────────────────────────────────
FROM node:22-alpine AS final

# Security: run as a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy production node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy application source files
COPY server.js        ./
COPY index.html       ./
COPY panel.js         ./
COPY hls.light.min.js ./

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
