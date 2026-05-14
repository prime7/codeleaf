import type { Metadata } from "next"
import { TerminalNav } from "@/components/page/terminal-nav"
import { MatrixFooter } from "@/components/page/matrix-footer"
import { CityPageTemplate } from "@/components/page/cities/city-page-template"

export const metadata: Metadata = {
  title: "AI Automation Calgary | Chatbots, Voice Agents & CRM | CodeLeaf",
  description:
    "Calgary's AI automation agency. We build AI chatbots, voice agents, and CRM automation for Calgary businesses. Free AI readiness audit for Calgary companies.",
  keywords: [
    "AI automation Calgary",
    "AI chatbot Calgary",
    "AI voice agent Calgary",
    "CRM automation Calgary",
    "lead generation Calgary",
    "AI agency Calgary",
    "workflow automation Calgary",
    "AI for small business Calgary",
    "AI trades Calgary",
    "AI real estate Calgary",
  ],
  openGraph: {
    title: "AI Automation Calgary | Chatbots, Voice Agents & CRM | CodeLeaf",
    description: "Calgary's AI automation agency. Free AI readiness audit for Calgary businesses.",
    url: "https://codeleaf.ca/calgary-ai-automation/",
  },
  alternates: {
    canonical: "https://codeleaf.ca/calgary-ai-automation/",
  },
}

export default function CalgaryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <CityPageTemplate
        city="Calgary"
        region="Southern Alberta"
        tagline="From missed calls to booked appointments — AI automation built for Calgary's energy, trades, and professional services businesses."
        description="Based in Edmonton, CodeLeaf serves Calgary businesses with production-ready AI chatbots, voice agents, CRM automation, and lead generation systems. We understand Calgary's unique industries — from oilfield services and construction to real estate and healthcare."
        industries={[
          "Energy & Oilfield Services",
          "Construction & Trades",
          "Real Estate & Property Management",
          "Healthcare & Medical Clinics",
          "Professional Services",
          "Retail & E-commerce",
          "Financial Services",
          "Transportation & Logistics",
        ]}
        localStats={[
          { label: "Calgary Projects", value: "35+" },
          { label: "Avg Response Time", value: "<1s" },
          { label: "Lead Increase", value: "45%" },
          { label: "Calgary Clients", value: "15+" },
        ]}
      />
      <MatrixFooter />
    </main>
  )
}
