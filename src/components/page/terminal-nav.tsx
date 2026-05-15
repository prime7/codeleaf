"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import siteContent from "@/site.json"

export function TerminalNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { brand, navigation } = siteContent

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change (Next.js link clicks don't trigger popstate,
  // so we use a simple click listener on mobile links)
  const handleMobileLinkClick = () => setMobileOpen(false)

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

          <div className="flex items-center gap-4">
            {/* Page links - desktop only */}
            <div className="hidden md:flex items-center gap-4 mr-2">
              <Link
                href="/ai-services/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                AI Services
              </Link>
              <Link
                href="/insights/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Insights
              </Link>
            </div>

            <Button
              asChild
              variant="outline"
              className="group hidden sm:flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <Link href={navigation.ctaHref}>
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-primary-foreground transition-colors" />
                {navigation.ctaLabel}
              </Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-primary/10 pt-4 space-y-3">
            <Link
              href="/ai-services/"
              onClick={handleMobileLinkClick}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              AI Services
            </Link>
            <Link
              href="/insights/"
              onClick={handleMobileLinkClick}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
            >
              Insights
            </Link>
            <Button
              asChild
              variant="outline"
              className="group flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary w-full mt-2"
            >
              <Link href={navigation.ctaHref} onClick={handleMobileLinkClick}>
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-primary-foreground transition-colors" />
                {navigation.ctaLabel}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
