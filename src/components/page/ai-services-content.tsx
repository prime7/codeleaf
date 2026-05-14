"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Lightbulb,
  Cpu,
  MessageSquare,
  Workflow,
  Bot,
  ArrowRight,
  Search,
  FlaskConical,
  Rocket,
  CheckCircle2,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import siteContent from "@/site.json"

const iconMap = { Lightbulb, Cpu, MessageSquare, Workflow, Bot } as const

const methodology = [
  {
    phase: "Discovery",
    icon: Search,
    description: "We audit your workflows, data, and constraints. We identify the highest-ROI AI use cases and build a feasibility map.",
    deliverables: ["AI Opportunity Report", "Data Readiness Assessment", "Risk & Compliance Review"],
  },
  {
    phase: "Pilot",
    icon: FlaskConical,
    description: "We build a focused proof-of-concept in 4–6 weeks. Test with real data, measure outcomes, and refine before scaling.",
    deliverables: ["Working Prototype", "Performance Benchmarks", "Refined Roadmap"],
  },
  {
    phase: "Scale",
    icon: Rocket,
    description: "We productionize the pilot with monitoring, guardrails, and integrations. Then we optimize and expand to new use cases.",
    deliverables: ["Production Deployment", "Monitoring Dashboard", "Knowledge Transfer"],
  },
]

const techStack = [
  {
    category: "LLMs & APIs",
    tools: "OpenAI GPT-4, Anthropic Claude, Google Gemini, OpenRouter",
    context: "We match the model to your task — reasoning, cost, latency, and compliance requirements.",
  },
  {
    category: "Orchestration",
    tools: "LangChain, LlamaIndex, Vercel AI SDK",
    context: "Robust frameworks for chaining prompts, managing memory, and building agent workflows.",
  },
  {
    category: "Vector & Search",
    tools: "Pinecone, Weaviate, pgvector, Redis",
    context: "High-performance retrieval for RAG pipelines, semantic search, and recommendation engines.",
  },
  {
    category: "Infrastructure",
    tools: "AWS, Cloudflare, Docker, Kubernetes",
    context: "Scalable, cost-efficient deployment with auto-scaling, caching, and global edge delivery.",
  },
]

export function AIServicesContent() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { aiServices } = siteContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            AI Implementation <span className="text-primary">Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From LLM selection and prompt engineering to production deployment and monitoring — we navigate the
            complexity so you get business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
              <Link href="/#contact">
                Start Your AI Project
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent" asChild>
              <Link href="/#projects">View AI Case Studies</Link>
            </Button>
          </div>
        </div>

        {/* Service Offerings */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {aiServices.title} <span className="text-primary">{aiServices.highlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{aiServices.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.items.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap]
              const isActive = activeId === item.id

              return (
                <Card
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`group relative p-8 transition-all duration-500 cursor-default ${
                    isActive
                      ? "border-primary/60 bg-card/40 shadow-[0_0_40px_oklch(0.7_0.22_145_/_0.15)] scale-[1.02]"
                      : "border-primary/10 hover:border-primary/30"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease-out ${index * 0.1}s`,
                  }}
                >
                  <div
                    className={`w-14 h-14 flex items-center justify-center mb-6 border transition-all duration-300 ${
                      isActive ? "border-primary bg-primary/20" : "border-primary/20"
                    }`}
                  >
                    <Icon
                      size={26}
                      className={`transition-all duration-300 ${isActive ? "text-primary scale-110" : "text-muted-foreground"}`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className={`font-mono text-xs px-2 py-1 transition-all duration-300 ${
                          isActive ? "bg-primary/20 text-primary" : "bg-secondary/50 text-muted-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`absolute top-0 right-0 w-8 h-8 border-t border-r transition-all duration-300 ${
                      isActive ? "border-primary" : "border-transparent"
                    }`}
                  />
                  <div
                    className={`absolute bottom-0 left-0 w-8 h-8 border-b border-l transition-all duration-300 ${
                      isActive ? "border-primary" : "border-transparent"
                    }`}
                  />
                </Card>
              )
            })}
          </div>
        </div>

        {/* Methodology */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven three-phase approach that de-risks AI investment and gets you to production faster.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={step.phase}
                  className="p-8 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 relative"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.6s ease-out ${0.3 + index * 0.15}s`,
                  }}
                >
                  <div className="absolute -top-3 left-8 bg-background px-3 py-1 border border-primary/20 text-xs font-mono text-primary">
                    Phase {index + 1}
                  </div>
                  <div className="w-14 h-14 flex items-center justify-center border border-primary/20 mb-6 mt-2">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.phase}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We choose tools for reliability, cost-efficiency, and your specific constraints — not hype.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techStack.map((group, index) => (
              <Card
                key={group.category}
                className="p-8 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${0.5 + index * 0.1}s`,
                }}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{group.category}</h3>
                <p className="text-sm text-primary font-mono mb-3">{group.tools}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{group.context}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Pricing <span className="text-primary">Transparency</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              No hidden fees. We scope clearly and bill for outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-card/50 border-border/50 text-center">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Discovery</div>
              <div className="text-4xl font-bold text-foreground mb-2">$3K – $8K</div>
              <p className="text-sm text-muted-foreground mb-6">2–3 week engagement</p>
              <ul className="space-y-3 text-left">
                {["Use case analysis", "Data readiness review", "ROI model", "Technical roadmap"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 border-primary/40 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Pilot</div>
              <div className="text-4xl font-bold text-foreground mb-2">$15K – $40K</div>
              <p className="text-sm text-muted-foreground mb-6">4–6 week engagement</p>
              <ul className="space-y-3 text-left">
                {["Working prototype", "Real data integration", "Performance benchmarks", "Production roadmap"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Card>

            <Card className="p-8 bg-card/50 border-border/50 text-center">
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Scale</div>
              <div className="text-4xl font-bold text-foreground mb-2">Custom</div>
              <p className="text-sm text-muted-foreground mb-6">Ongoing partnership</p>
              <ul className="space-y-3 text-left">
                {["Production deployment", "Monitoring & alerts", "Feature expansion", "Dedicated support"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to implement <span className="text-primary">AI</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Tell us about your challenge. We'll respond within 24 hours with a clear path forward.
          </p>
          <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
            <Link href="/#contact">
              Start Your AI Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
