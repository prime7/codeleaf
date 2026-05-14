"use client"

import { useRef, useEffect, useState } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import siteContent from "@/site.json"

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { pricing } = siteContent

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
    <section id="pricing" ref={sectionRef} className="py-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {pricing.title} <span className="text-primary">{pricing.highlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {pricing.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricing.items.map((item, index) => (
            <Card
              key={item.name}
              className={`p-8 text-center relative transition-all duration-500 ${
                item.popular
                  ? "border-primary/40 bg-card/40 shadow-[0_0_40px_oklch(0.7_0.22_145_/_0.1)]"
                  : "border-primary/10 hover:border-primary/30"
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-sm text-muted-foreground uppercase tracking-wider mb-2">{item.name}</div>
              <div className="text-4xl font-bold text-foreground mb-2">{item.price}</div>
              <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
              <p className="text-sm text-foreground/70 mb-6">{item.description}</p>
              <ul className="space-y-3 text-left mb-8">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={item.popular ? "default" : "outline"}
                className="w-full rounded-full"
                size="lg"
                asChild
              >
                <Link href="/#audit">
                  {item.price === "Custom" ? "Book a Call" : "Get Started"}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Not sure which plan fits? Start with a{" "}
            <Link href="/#audit" className="text-primary hover:underline">
              free AI readiness audit
            </Link>{" "}
            and we'll recommend the right approach.
          </p>
        </div>
      </div>
    </section>
  )
}
