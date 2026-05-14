"use client"

import Link from "next/link"
import { Leaf, Phone, Mail, MapPin } from "lucide-react"
import siteContent from "@/site.json"

export function MatrixFooter() {
  const { brand, footer } = siteContent

  return (
    <footer className="relative py-20 px-6 border-t border-primary/10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <Leaf size={28} className="text-primary" />
              <span className="font-semibold text-2xl tracking-tight">
                <span className="text-primary">{brand.primary}</span>
                <span className="text-foreground">{brand.secondary}</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              {footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              {footer.headings.navigation}
            </h4>
            <nav className="space-y-3">
              {footer.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              {footer.headings.connect}
            </h4>
            <nav className="space-y-3">
              {footer.connect.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              {footer.headings.contact}
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href={`tel:${brand.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href={`mailto:${brand.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <span className="text-muted-foreground text-sm">{brand.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {brand.name}. All rights reserved. PIPEDA Compliant.
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {footer.status}
          </div>
        </div>
      </div>
    </footer>
  )
}
