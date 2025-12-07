"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Leaf, Code, Database, Globe, Smartphone, Shield, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function ImmersiveHero() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const [bgLeaves] = useState<Array<{
    id: number
    left: number
    top: number
    size: number
    opacity: number
    rotation: number
    duration: number
    delay: number
  }>>(() => [...Array(15)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: 20 + Math.random() * 30,
    opacity: 0.02 + Math.random() * 0.04,
    rotation: Math.random() * 360,
    duration: 25 + Math.random() * 20,
    delay: Math.random() * -25,
  })))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate leaves on client side only to prevent hydration mismatch
    setTimeout(() => setLoaded(true), 100)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  const services = [
    { icon: Code, label: "Web Apps" },
    { icon: Smartphone, label: "Mobile" },
    { icon: Database, label: "Backend" },
    { icon: Cloud, label: "Cloud" },
    { icon: Shield, label: "Security" },
    { icon: Globe, label: "Deployment" },
  ]

  const stats = [
    { value: "50+", label: "Projects" },
    { value: "98%", label: "Satisfaction" },
    { value: "5+", label: "Years" },
  ]

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Floating leaf background */}
      <div className="absolute inset-0 pointer-events-none">
        {bgLeaves.map((leaf) => (
          <div
            key={leaf.id}
            className="absolute"
            style={{
              left: `${leaf.left}%`,
              top: `${leaf.top}%`,
              opacity: leaf.opacity,
              animation: `float-gentle ${leaf.duration}s ease-in-out infinite`,
              animationDelay: `${leaf.delay}s`,
            }}
          >
            <Leaf
              className="text-primary"
              style={{
                width: leaf.size,
                height: leaf.size,
                transform: `rotate(${leaf.rotation}deg)`,
              }}
              strokeWidth={1}
            />
          </div>
        ))}
      </div>

      {/* Subtle mouse-following glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: "translate(-50%, -50%)",
          opacity: loaded ? 1 : 0,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 20}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <Badge variant="outline" className="mb-8 px-4 py-2 border-primary/20 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
            Available for new projects
          </Badge>
        </div>

        {/* Animated leaf icon */}
        <div
          className="inline-flex items-center justify-center mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 30}px) scale(${loaded ? 1 : 0.8})`,
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full border border-primary/20"
              style={{
                width: 100,
                height: 100,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                animation: "pulse 3s ease-in-out infinite",
              }}
            />
            <div className="relative p-6">
              <Leaf
                className="w-12 h-12 text-primary"
                strokeWidth={1.5}
                style={{
                  filter: "drop-shadow(0 0 20px hsl(var(--primary) / 0.4))",
                }}
              />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 30}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
          }}
        >
          <span className="text-foreground">code</span>
          <span className="text-primary">leaf</span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg sm:text-xl text-muted-foreground font-light mb-10 max-w-xl mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 20}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
          }}
        >
          Custom technical solutions that grow with your business
        </p>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-2xl mx-auto"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 20}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
          }}
        >
          {services.map((service, i) => (
            <Card
              key={service.label}
              className="group flex items-center gap-2 px-4 py-2 bg-card/50 border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <service.icon className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {service.label}
              </span>
            </Card>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 20}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
          }}
        >
          <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
            <a href="#contact">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent" asChild>
            <a href="#projects">View Our Work</a>
          </Button>
        </div>

        <div
          className="flex flex-wrap justify-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translateY(${loaded ? 0 : 20}px)`,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
          }}
        >
          {stats.map((stat) => (
            <Card key={stat.label} className="px-6 py-4 bg-card/30 border-border/30 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          style={{
            opacity: loaded ? 0.4 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-foreground/30 to-foreground/50" />
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 1s ease 1s",
        }}
      />
    </section>
  )
}
