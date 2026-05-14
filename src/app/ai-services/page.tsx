import type { Metadata } from "next"
import { TerminalNav } from "@/components/page/terminal-nav"
import { MatrixFooter } from "@/components/page/matrix-footer"
import { AIServicesContent } from "@/components/page/ai-services-content"

export const metadata: Metadata = {
  title: "AI Services | CodeLeaf",
  description:
    "End-to-end AI implementation services: strategy, custom development, LLM integration, workflow automation, and AI agent development. Based in Edmonton, serving Canada.",
}

export default function AIServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <AIServicesContent />
      <MatrixFooter />
    </main>
  )
}
