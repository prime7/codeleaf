"use client"

import type React from "react"
import { useState } from "react"
import { Send, CheckCircle2, Leaf, Phone, Mail, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import siteContent from "@/site.json"

export function TerminalContact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", project: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentCommand, setCurrentCommand] = useState("")
  const [error, setError] = useState("")
  const { contact, brand } = siteContent

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const trimmed = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      phone: formData.phone.trim(),
      project: formData.project.trim(),
    }
    if (!trimmed.name || !trimmed.email || !trimmed.project) {
      setError("Please fill out all required fields.")
      return
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed.email)
    if (!emailValid) {
      setError("Enter a valid email.")
      return
    }
    setIsSubmitting(true)
    const templatedCommand = contact.commandTemplate
      .replace("{name}", trimmed.name)
      .replace("{email}", trimmed.email)
    setCurrentCommand(templatedCommand)

    try {
      const res = await fetch("https://formsubmit.co/ajax/hello@codeleaf.ca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmed.name,
          email: trimmed.email,
          company: trimmed.company,
          phone: trimmed.phone,
          message: trimmed.project,
          _subject: "New CodeLeaf AI Audit Request",
          _template: "table",
        }),
      })

      if (!res.ok) {
        throw new Error("Failed to send")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", phone: "", project: "" })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left side - Contact info */}
          <div className="lg:col-span-2">
            <div className="text-left mb-8">
              <Leaf size={40} className="text-primary mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{contact.title}</h2>
              <p className="text-muted-foreground text-lg">{contact.subtitle}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/20">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <a href={`tel:${brand.phone}`} className="text-foreground hover:text-primary transition-colors">
                    {brand.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/20">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href={`mailto:${brand.email}`} className="text-foreground hover:text-primary transition-colors">
                    {brand.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center border border-primary/20">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="text-foreground">{brand.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:col-span-3">
            <div className="bg-card/30 border border-primary/20 p-8 md:p-10">
              {/* Command history */}
              <div className="space-y-4 mb-6">
                {contact.commandHistory.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">$</span>
                      <span>{item.cmd}</span>
                    </div>
                    <div className="text-primary/70 ml-4 mt-1">{item.response}</div>
                  </div>
                ))}
                {currentCommand && (
                  <div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="text-primary">$</span>
                      <span>{currentCommand}</span>
                    </div>
                    {isSubmitting && (
                      <div className="text-primary/70 ml-4 mt-1 flex items-center gap-2">
                        <span className="animate-pulse">{contact.processingText}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 size={56} className="mx-auto text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{contact.form.successTitle}</h3>
                  <p className="text-muted-foreground">{contact.form.successSubtitle}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">{contact.form.labels.name} *</label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={contact.form.placeholders.name}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">{contact.form.labels.email} *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={contact.form.placeholders.email}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">{contact.form.labels.company}</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={contact.form.placeholders.company}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground block mb-2">{contact.form.labels.phone}</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={contact.form.placeholders.phone}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">{contact.form.labels.project} *</label>
                    <Textarea
                      required
                      rows={5}
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder={contact.form.placeholders.project}
                    />
                  </div>
                  {error && <div className="text-sm text-red-400">{error}</div>}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      contact.form.submitting
                    ) : (
                      <>
                        {contact.form.submit}
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
