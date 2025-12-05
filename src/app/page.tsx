import { TerminalNav } from "@/components/page/terminal-nav"
import { ImmersiveHero } from "@/components/page/immersive-hero"
import { CapabilitiesGrid } from "@/components/page/capabilities-grid"
import { ProjectsShowcase } from "@/components/page/projects-showcase"
import { PhilosophySection } from "@/components/page/philosophy-section"
import { TerminalContact } from "@/components/page/terminal-contact"
import { MatrixFooter } from "@/components/page/matrix-footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <ImmersiveHero />
      <CapabilitiesGrid />
      <ProjectsShowcase />
      <PhilosophySection />
      <TerminalContact />
      <MatrixFooter />
    </main>
  )
}