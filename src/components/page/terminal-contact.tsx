"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, CheckCircle2, Leaf } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const commandHistory = [
  { cmd: "codeleaf --help", response: "Available commands: contact, projects, about" },
  { cmd: "codeleaf contact --init", response: "Initializing contact form..." },
]

export function TerminalContact() {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentCommand, setCurrentCommand] = useState("")
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setCurrentCommand(`codeleaf contact --send --name="${formData.name}" --email="${formData.email}"`)

    await new Promise((r) => setTimeout(r, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 px-6 bg-secondary/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Leaf size={40} className="mx-auto text-primary mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Let&apos;s grow something</h2>
          <p className="text-muted-foreground text-lg">Tell us about your vision. We&apos;ll make it real.</p>
        </div>

        {/* Terminal contact form */}
        <div className="bg-card/30 border border-primary/20 p-8 md:p-10">
          {/* Command history */}
          <div className="space-y-4 mb-6">
            {commandHistory.map((item, i) => (
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
                    <span className="animate-pulse">Processing request...</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Form or success message */}
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle2 size={56} className="mx-auto text-primary mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Message sent</h3>
              <p className="text-muted-foreground">We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Name</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">Email</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Project details</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full"
                size="lg"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="text-muted-foreground flex items-center gap-2">
              <span className="text-primary">$</span>
              <span className="animate-pulse">Loading form interface...</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
