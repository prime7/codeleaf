"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Grow Your Vision?
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Let's discuss how CodeLeaf can help transform your ideas into powerful, scalable solutions. Your success story
          starts with a conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group">
            Start a Conversation
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            View Our Process
          </Button>
        </div>
      </div>
    </section>
  )
}
