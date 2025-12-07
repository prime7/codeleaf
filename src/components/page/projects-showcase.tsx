"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import siteContent from "@/site.json"

export function ProjectsShowcase() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { projectsShowcase } = siteContent

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
    <section id="projects" ref={sectionRef} className="relative py-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              {projectsShowcase.title} <span className="text-primary">{projectsShowcase.highlight}</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          {projectsShowcase.projects.map((project, index) => {
            const isHovered = hoveredId === project.id

            return (
              <Link key={project.id} href={project.href || "#"} prefetch={false} className="block">
                <Card
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative transition-all duration-500 cursor-pointer overflow-hidden ${
                    isHovered ? "border-primary/50 bg-card/50" : "border-primary/10 bg-card/20"
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-40px)",
                    transition: `all 0.6s ease-out ${index * 0.15}s`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at left, oklch(0.5 0.15 ${project.color} / 0.1), transparent 70%)`,
                    }}
                  />

                  <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="font-mono text-6xl md:text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.name}</h3>
                        <span className="font-mono text-xs text-muted-foreground px-2 py-1 bg-secondary/50">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-muted-foreground max-w-xl mb-4">{project.description}</p>
                      <div className="flex items-center gap-3 text-primary text-sm font-medium">
                        <span>View project</span>
                        <ArrowRight
                          size={18}
                          className={`transition-all duration-300 ${
                            isHovered ? "opacity-100 translate-x-1" : "opacity-70 -translate-x-1"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="flex gap-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="font-mono text-xs text-muted-foreground uppercase">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
