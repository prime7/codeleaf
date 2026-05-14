"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import siteContent from "@/site.json"

interface InsightsSectionProps {
  posts: {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
  }[]
}

export function InsightsSection({ posts }: InsightsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { insights } = siteContent

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

  const displayPosts = posts.slice(0, 3)

  return (
    <section id="insights" ref={sectionRef} className="relative py-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground">
              {insights.title} <span className="text-primary">{insights.highlight}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mt-4 text-lg">{insights.description}</p>
          </div>
          <Link
            href="/insights/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium shrink-0"
          >
            View all insights
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <Card
              key={post.slug}
              className="group p-8 bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-primary/20 text-primary text-xs">
                  {post.category}
                </Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{post.excerpt}</p>

              <Link
                href={`/insights/${post.slug}/`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
              >
                Read article
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
