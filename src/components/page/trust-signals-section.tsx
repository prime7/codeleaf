"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, GitBranch, Users } from "lucide-react"
import { Card } from "@/components/ui/card"
import siteContent from "@/site.json"

const iconMap = { ShieldCheck, GitBranch, Users } as const

export function TrustSignalsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { trustSignals } = siteContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="trust" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {trustSignals.title} <span className="text-primary">{trustSignals.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{trustSignals.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {trustSignals.pillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            return (
              <Card
                key={pillar.title}
                className="p-8 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease-out ${index * 0.15}s`,
                }}
              >
                <div className="w-14 h-14 flex items-center justify-center border border-primary/20 mb-6">
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            )
          })}
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustSignals.stats.map((stat) => (
            <Card
              key={stat.label}
              className="px-6 py-4 bg-card/30 border-border/30 text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease-out 0.4s",
              }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
