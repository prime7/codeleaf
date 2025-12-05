"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const philosophies = [
  {
    number: "01",
    title: "Code is craft",
    description:
      "Every line matters. We write software like poets write verses — with intention, precision, and beauty.",
  },
  {
    number: "02",
    title: "Simplicity scales",
    description: "Complex problems don't need complex solutions. We find the elegant path that others miss.",
  },
  {
    number: "03",
    title: "Own the outcome",
    description: "We're not vendors. We're partners. Your success is the only metric that matters.",
  },
]

const stats = [
  { value: "50+", label: "Projects" },
  { value: "99%", label: "Retention" },
  { value: "8+", label: "Years" },
]

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="philosophy" ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-12">
            We don't just write code.
            <br />
            <span className="text-primary">We grow solutions.</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            Like a leaf, every project needs the right environment to thrive. We provide the expertise, care, and
            technical foundation for your ideas to flourish.
          </p>

          {/* Stats row */}
          <div className="flex justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                className={`text-center p-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="font-mono text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
