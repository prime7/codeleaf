"use client"

import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "Meridian Analytics",
    category: "Data Platform",
    description: "Enterprise-grade analytics platform processing 10M+ daily events",
    image: "/modern-data-analytics-dashboard-dark-theme.jpg",
  },
  {
    title: "HealthSync",
    category: "Healthcare App",
    description: "HIPAA-compliant patient management system for 50+ clinics",
    image: "/healthcare-mobile-app-interface-clean-design.jpg",
  },
  {
    title: "LogiChain",
    category: "Supply Chain",
    description: "Real-time logistics tracking with IoT integration",
    image: "/logistics-supply-chain-dashboard-map-tracking.jpg",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Work</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">Projects We've Cultivated</h2>
          </div>
          <a href="#" className="text-primary font-medium flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="group cursor-pointer overflow-hidden p-0">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
