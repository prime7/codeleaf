"use client"

import { useState, useRef, useEffect } from "react"
import { Code2, Database, Cloud, Shield, Cpu, Layers } from "lucide-react"
import { Card } from "@/components/ui/card"
import siteContent from "@/site.json"

const capabilityIconMap = { Code2, Database, Cloud, Shield, Cpu, Layers } as const

export function CapabilitiesGrid() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { capabilities } = siteContent

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
    <section id="capabilities" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {capabilities.heading} <span className="text-primary">{capabilities.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{capabilities.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.items.map((cap, index) => {
            const Icon = capabilityIconMap[cap.icon as keyof typeof capabilityIconMap]
            const isActive = activeId === cap.id

            return (
              <Card
                key={cap.id}
                onMouseEnter={() => setActiveId(cap.id)}
                onMouseLeave={() => setActiveId(null)}
                className={`group relative p-8 transition-all duration-500 cursor-pointer ${
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
                {/* Icon container */}
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

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{cap.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {cap.tech.map((t) => (
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

                {/* Corner accent */}
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
    </section>
  )
}
