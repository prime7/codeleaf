"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10 animate-float">
          <Leaf className="w-32 h-32 text-primary" style={{ animationDelay: "0s" }} />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
          <Leaf className="w-24 h-24 text-primary rotate-45" />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-10 animate-float" style={{ animationDelay: "4s" }}>
          <Leaf className="w-20 h-20 text-primary -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-1/3 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          <Leaf className="w-28 h-28 text-primary rotate-90" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">Custom Technical Solutions</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-balance">
          Technology That
          <br />
          <span className="text-primary">Grows</span> With You
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          We craft bespoke software solutions rooted in deep technical expertise. From concept to deployment, we nurture
          your vision into robust, scalable reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            Start Your Project
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            View Our Work
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground mb-6">Trusted by forward-thinking companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {["TechFlow", "Meridian", "Quantum", "Horizon", "Apex"].map((company) => (
              <span key={company} className="text-lg font-semibold text-foreground">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
