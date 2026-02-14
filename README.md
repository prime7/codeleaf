This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare

This project is configured to deploy to Cloudflare using OpenNext.js.

### Prerequisites

1. A Cloudflare account
2. A domain configured in Cloudflare (currently set to `codeleaf.ca`)

### Setup

1. **Create API Token:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to My Profile > API Tokens
   - Create a new token with "Edit Cloudflare Workers" permissions

2. **Add Secrets to GitHub:**
   - Go to your repository settings
   - Navigate to Secrets and Variables > Actions
   - Add these secrets:
     - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID (found in dashboard)

### Automatic Deployment

The project will automatically deploy to Cloudflare when you push to the `main` or `master` branch.

### Manual Deployment

To deploy manually:

```bash
# Build and deploy
pnpm deploy

# Or build and preview locally
pnpm preview
```

### Configuration

- `wrangler.toml`: Cloudflare configuration
- `open-next.config.ts`: OpenNext.js configuration
- `.github/workflows/deploy.yml`: GitHub Actions deployment workflow

For more information, see the [OpenNext.js documentation](https://opennext.js.org/).
Dummy