"use client"

import { Code2, Database, Cloud, Smartphone, Shield, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"

const services = [
  {
    icon: Code2,
    title: "Web Applications",
    description: "Custom web solutions built with modern frameworks. Scalable, secure, and designed for growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform apps that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Transform your data into actionable insights with custom analytics and data infrastructure.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design and migrate to cloud infrastructure that scales with your business demands.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Robust security implementations and compliance frameworks to protect your digital assets.",
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful and GraphQL APIs that power seamless integrations and third-party connections.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Solutions That Take Root</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is unique. We tailor our expertise to cultivate the perfect solution for your specific
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
