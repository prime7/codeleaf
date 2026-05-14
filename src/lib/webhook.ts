import { CONFIG } from "@/lib/config"

interface FormPayload {
  name: string
  email: string
  company?: string
  phone?: string
  industry?: string
  message?: string
  source: "lead-magnet" | "contact" | "calgary-page" | "edmonton-page"
  pageUrl?: string
}

export async function submitForm(payload: FormPayload) {
  try {
    const res = await fetch("https://formsubmit.co/ajax/hello@codeleaf.ca", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company || "",
        phone: payload.phone || "",
        industry: payload.industry || "",
        message: payload.message || `Source: ${payload.source}`,
        _subject: `New CodeLeaf Inquiry — ${payload.source}`,
        _template: "table",
        _replyto: payload.email,
      }),
    })

    return { success: res.ok }
  } catch {
    return { success: false }
  }
}

// Track conversion events for analytics
export function trackConversion(
  eventName: string,
  value?: number,
  currency: string = "CAD"
) {
  if (typeof window !== "undefined") {
    const gtag = (window as any).gtag
    if (gtag) {
      gtag("event", eventName, { value, currency })
    }
  }
}
