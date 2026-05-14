"use client"

import Script from "next/script"
import { CONFIG } from "@/lib/config"

export function Analytics() {
  // Don't render scripts if no IDs are configured
  if (!CONFIG.features.analytics) {
    return null
  }

  return (
    <>
      {/* Google Analytics 4 */}
      {CONFIG.features.analytics && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${CONFIG.googleAnalyticsId}', {
                page_title: document.title,
                page_location: window.location.href,
                send_page_view: true,
              });
            `}
          </Script>
        </>
      )}
    </>
  )
}

// Helper to track custom events
export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>
) {
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag
    if (gtag) {
      gtag("event", eventName, params)
    }
  }
}
