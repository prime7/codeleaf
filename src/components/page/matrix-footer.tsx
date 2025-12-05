"use client"

import { Leaf } from "lucide-react"

export function MatrixFooter() {
  return (
    <footer className="relative py-20 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo and description */}
          <div className="md:col-span-5">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <Leaf size={28} className="text-primary" />
              <span className="font-semibold text-2xl tracking-tight">
                <span className="text-primary">Code</span>
                <span className="text-foreground">Leaf</span>
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Growing custom technical solutions that help businesses thrive. Based in Canada, cultivating ideas
              globally.
            </p>
            <a href="mailto:hello@codeleaf.ca" className="text-primary hover:underline underline-offset-4">
              hello@codeleaf.ca
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Navigate</h4>
            <nav className="space-y-3">
              {[
                { label: "Capabilities", href: "#capabilities" },
                { label: "Work", href: "#projects" },
                { label: "About", href: "#philosophy" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">Connect</h4>
            <nav className="space-y-3">
              {["GitHub", "LinkedIn", "Twitter"].map((item) => (
                <a key={item} href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CodeLeaf. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
