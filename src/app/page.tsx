import { TerminalNav } from "@/components/page/terminal-nav"
import { ImmersiveHero } from "@/components/page/immersive-hero"
import { LeadMagnetSection } from "@/components/page/lead-magnet-section"
import { IndustriesSection } from "@/components/page/industries-section"
import { AIServicesSection } from "@/components/page/ai-services-section"
import { CapabilitiesGrid } from "@/components/page/capabilities-grid"
import { ProjectsShowcase } from "@/components/page/projects-showcase"
import { TestimonialsSection } from "@/components/page/testimonials-section"
import { TrustSignalsSection } from "@/components/page/trust-signals-section"
import { PricingSection } from "@/components/page/pricing-section"
import { InsightsSection } from "@/components/page/insights-section"
import { PhilosophySection } from "@/components/page/philosophy-section"
import { TerminalContact } from "@/components/page/terminal-contact"
import { MatrixFooter } from "@/components/page/matrix-footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <ImmersiveHero />
      <LeadMagnetSection />
      <IndustriesSection />
      <AIServicesSection />
      <CapabilitiesGrid />
      <ProjectsShowcase />
      <TestimonialsSection />
      <TrustSignalsSection />
      <PricingSection />
      <InsightsSection />
      <PhilosophySection />
      <TerminalContact />
      <MatrixFooter />
    </main>
  )
}
