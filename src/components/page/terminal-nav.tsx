"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteContent from "@/site.json"

export function TerminalNav() {
  const [scrolled, setScrolled] = useState(false)
  const { brand, navigation } = siteContent

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_oklch(0_0_0/0.1)]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Leaf
                size={22}
                className="text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
            <span className="font-semibold text-xl tracking-tight">
              <span className="text-primary">{brand.primary}</span>
              <span className="text-foreground">{brand.secondary}</span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="group flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Link href={navigation.ctaHref}>
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-primary-foreground transition-colors" />
                {navigation.ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
