"use client"

import { useState, useEffect } from "react"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TerminalNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_oklch(0_0_0_/_0.1)]"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Leaf
                size={22}
                className="text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
            </div>
            <span className="font-semibold text-xl tracking-tight">
              <span className="text-primary">Code</span>
              <span className="text-foreground">Leaf</span>
            </span>
          </a>

          <div className="hidden md:flex items-center">
            <Button
              asChild
              variant="outline"
              className="group flex items-center gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              <a href="#contact">
                <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:bg-primary-foreground transition-colors" />
                Start a Project
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/10 p-6">
            <div className="flex flex-col gap-4">
              <Button
                asChild
                className="w-full"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                >
                  Start a Project
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
