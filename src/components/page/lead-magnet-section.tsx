"use client"

import { useState, useRef, useEffect } from "react"
import { CheckCircle2, Sparkles, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import siteContent from "@/site.json"

export function LeadMagnetSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { leadMagnet } = siteContent

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const trimmed = {
      name: formData.name.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      industry: formData.industry,
    }
    if (!trimmed.name || !trimmed.email || !trimmed.company) {
      setError("Please fill out all required fields.")
      return
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)
    if (!emailValid) {
      setError("Enter a valid email.")
      return
    }
    setIsSubmitting(true)

    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@codeleaf.ca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmed.name,
          email: trimmed.email,
          company: trimmed.company,
          phone: trimmed.phone,
          industry: trimmed.industry,
          message: `Lead Magnet Form - Industry: ${trimmed.industry}, Phone: ${trimmed.phone}`,
          _subject: "New Free AI Audit Request - CodeLeaf",
          _template: "table",
        }),
      })

      if (!res.ok) throw new Error("Failed to send")
      setIsSubmitted(true)
      setFormData({ name: "", company: "", email: "", phone: "", industry: "" })
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="audit" ref={sectionRef} className="relative py-24 px-6 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Value prop */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out",
            }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-2 border-primary/20 bg-primary/10 text-primary">
              <Sparkles size={14} className="mr-2" />
              {leadMagnet.badge}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {leadMagnet.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {leadMagnet.subtitle}
            </p>
            <ul className="space-y-4">
              {leadMagnet.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                    transition: `all 0.6s ease-out ${0.2 + i * 0.1}s`,
                  }}
                >
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground/80">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Form */}
          <Card
            className="p-8 bg-card/50 border-primary/20"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease-out 0.2s",
            }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="mx-auto text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-2">{leadMagnet.form.successTitle}</h3>
                <p className="text-muted-foreground">{leadMagnet.form.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">{leadMagnet.form.nameLabel} *</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={leadMagnet.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">{leadMagnet.form.companyLabel} *</label>
                    <Input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={leadMagnet.form.companyPlaceholder}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">{leadMagnet.form.emailLabel} *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={leadMagnet.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">{leadMagnet.form.phoneLabel}</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={leadMagnet.form.phonePlaceholder}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">{leadMagnet.form.industryLabel}</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select your industry...</option>
                    {leadMagnet.form.industryOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                {error && <div className="text-sm text-red-400">{error}</div>}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      {leadMagnet.form.submittingLabel}
                    </>
                  ) : (
                    <>
                      {leadMagnet.form.submitLabel}
                      <ArrowRight size={18} className="ml-2" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime. We respect your privacy under PIPEDA.
                </p>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
