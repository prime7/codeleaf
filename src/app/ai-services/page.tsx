import type { Metadata } from "next"
import { AIServicesContent } from "@/components/page/ai-services-content"

export const metadata: Metadata = {
  title: "AI Automation Services Edmonton & Calgary | CodeLeaf",
  description:
    "AI chatbots, voice agents, CRM automation, and workflow automation for Alberta businesses. Serving Edmonton, Calgary, and all of Alberta. Free AI readiness audit.",
  keywords: [
    "AI chatbot Edmonton",
    "AI voice agent Calgary",
    "CRM automation Alberta",
    "workflow automation Edmonton",
    "lead generation AI Alberta",
    "AI automation agency Calgary",
    "AI sales agent Edmonton",
    "AI customer service Alberta",
  ],
  openGraph: {
    title: "AI Automation Services Edmonton & Calgary | CodeLeaf",
    description: "AI chatbots, voice agents, CRM automation, and workflow automation for Alberta businesses.",
    url: "https://codeleaf.ca/ai-services/",
  },
}

export default function AIServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <AIServicesContent />
    </main>
  )
}
