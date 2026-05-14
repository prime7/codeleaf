"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import siteContent from "@/site.json"

interface CityPageTemplateProps {
  city: string
  region: string
  tagline: string
  description: string
  industries: string[]
  localStats: { label: string; value: string }[]
}

export function CityPageTemplate({
  city,
  region,
  tagline,
  description,
  industries,
  localStats,
}: CityPageTemplateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { brand } = siteContent

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
    <div ref={sectionRef} className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/5">
            <MapPin size={14} className="mr-2 text-primary" />
            Serving {city} and surrounding {region}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            AI Automation for <span className="text-primary">{city}</span> Businesses
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {tagline}
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
              <Link href="/#audit">
                Get Your Free {city} AI Audit
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent" asChild>
              <Link href={`tel:${brand.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                Call {brand.phone}
              </Link>
            </Button>
          </div>
        </div>

        {/* Local stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {localStats.map((stat, i) => (
            <Card
              key={stat.label}
              className="p-6 text-center bg-card/30 border-primary/10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.6s ease-out ${i * 0.1}s`,
              }}
            >
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Industries */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Solutions for <span className="text-primary">{city} Industries</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges of {city} businesses and build AI automation that delivers local results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, i) => (
              <Card
                key={industry}
                className="p-6 bg-card/30 border-primary/10 hover:border-primary/30 transition-all"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.6s ease-out ${0.2 + i * 0.05}s`,
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="text-foreground font-medium">{industry}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-primary/5 border border-primary/20 p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Automate Your <span className="text-primary">{city}</span> Business?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get your free AI readiness audit customized for {city} businesses. We will respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group rounded-full px-8 h-14 text-base" asChild>
              <Link href="/#audit">
                Get My Free {city} AI Audit
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base bg-transparent" asChild>
              <Link href={`mailto:${brand.email}`}>
                <Mail className="w-4 h-4 mr-2" />
                {brand.email}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
