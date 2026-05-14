import type { Metadata } from "next"
import { TerminalNav } from "@/components/page/terminal-nav"
import { MatrixFooter } from "@/components/page/matrix-footer"
import { InsightsList } from "@/components/page/insights-list"

export const metadata: Metadata = {
  title: "Insights | CodeLeaf",
  description:
    "Practical guidance on AI implementation, technology choices, and real-world results from the CodeLeaf team.",
}

export default function InsightsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <InsightsList />
      <MatrixFooter />
    </main>
  )
}
