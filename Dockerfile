FROM oven/bun:1.2.5-slim AS base
# Install dependencies only when needed
FROM base AS deps

WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Disable telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production

# Disable telemetry
ENV NEXT_TELEMETRY_DISABLED=1

RUN adduser --system --uid 1001 nextjs

RUN mkdir .next

RUN chown nextjs:bun .next

COPY --from=builder --chown=nextjs:bun /app/.next/standalone ./

COPY --from=builder --chown=nextjs:bun /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

CMD ["bun", "server.js"]