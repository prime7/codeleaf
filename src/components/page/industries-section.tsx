"use client"

import { useState, useRef, useEffect } from "react"
import {
  Wrench,
  Home,
  HeartPulse,
  Zap,
  Briefcase,
  ShoppingCart,
  ArrowRight,
  TrendingUp,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import siteContent from "@/site.json"

const iconMap = {
  Wrench,
  Home,
  HeartPulse,
  Zap,
  Briefcase,
  ShoppingCart,
} as const

export function IndustriesSection() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { industries } = siteContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="industries" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {industries.title} <span className="text-primary">{industries.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {industries.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {industries.items.map((item, index) => {
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

                <div className="space-y-2">
                  {item.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-foreground/80">
                      <TrendingUp size={14} className="text-primary shrink-0" />
                      {outcome}
                    </div>
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

        <div className="text-center">
          <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
            <Link href="/#audit">
              Get Your Free Industry-Specific AI Audit
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
