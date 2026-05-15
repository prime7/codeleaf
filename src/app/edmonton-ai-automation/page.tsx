import type { Metadata } from "next"
import { CityPageTemplate } from "@/components/page/cities/city-page-template"

export const metadata: Metadata = {
  title: "AI Automation Edmonton | Chatbots, Voice Agents & CRM | CodeLeaf",
  description:
    "Edmonton's AI automation agency. We build AI chatbots, voice agents, and CRM automation for Edmonton businesses. Free AI readiness audit. Locally based.",
  keywords: [
    "AI automation Edmonton",
    "AI chatbot Edmonton",
    "AI voice agent Edmonton",
    "CRM automation Edmonton",
    "lead generation Edmonton",
    "AI agency Edmonton",
    "workflow automation Edmonton",
    "AI for small business Edmonton",
    "AI trades Edmonton",
    "AI healthcare Edmonton",
  ],
  openGraph: {
    title: "AI Automation Edmonton | Chatbots, Voice Agents & CRM | CodeLeaf",
    description: "Edmonton's AI automation agency. Free AI readiness audit for local businesses.",
    url: "https://codeleaf.ca/edmonton-ai-automation/",
  },
  alternates: {
    canonical: "https://codeleaf.ca/edmonton-ai-automation/",
  },
}

export default function EdmontonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <CityPageTemplate
        city="Edmonton"
        region="Northern Alberta"
        tagline="AI-powered lead capture and automation for Edmonton businesses. Never miss another after-hours inquiry."
        description="CodeLeaf is based in Edmonton, Alberta. We specialize in AI chatbots, voice agents, CRM automation, and workflow automation for Edmonton businesses — from trades and healthcare to professional services and retail."
        industries={[
          "Construction & Trades",
          "Healthcare & Medical Clinics",
          "Real Estate & Property Management",
          "Professional Services",
          "Energy & Oilfield Services",
          "Retail & E-commerce",
          "Education & Training",
          "Manufacturing & Industrial",
        ]}
        localStats={[
          { label: "Edmonton Projects", value: "40+" },
          { label: "Avg Response Time", value: "<1s" },
          { label: "Lead Increase", value: "50%" },
          { label: "Local Clients", value: "20+" },
        ]}
      />
    </main>
  )
}
