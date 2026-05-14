"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, BookOpen } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import siteContent from "@/site.json"
import Link from "next/link"

export function InsightsList() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { insights } = siteContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Practical guidance on AI implementation, technology choices, and real-world results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.articles.map((article, index) => (
            <Card
              key={article.slug}
              className="group p-8 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 0.15}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-primary/20 text-primary text-xs">
                  {article.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>

              <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{article.excerpt}</p>

              <Link
                href={`/insights/${article.slug}/`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read article
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
