// Central configuration for CodeLeaf
// Option B: Hardcoded values (easiest for static export)
// Just edit the values below and rebuild — no env files needed

export const CONFIG = {
  // Brand
  siteUrl: "https://codeleaf.ca",

  // Analytics — paste your real IDs here when ready
  googleAnalyticsId: "",      // ← Format: G-XXXXXXXXXX

  // Features toggle
  features: {
    analytics: false,   // ← Set to true when you add GA ID
  },
} as const
