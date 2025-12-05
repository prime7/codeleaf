"use client"

import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We dive deep into understanding your business, goals, and technical requirements through collaborative workshops.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Our team crafts a comprehensive roadmap, selecting the optimal technologies and architectures for your needs.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Agile development with continuous feedback loops ensures your vision comes to life exactly as intended.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description: "We deploy, monitor, and continuously optimize your solution, ensuring it thrives in the real world.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Process</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
              From Seed to <span className="text-primary">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Like nurturing a seedling into a mighty tree, we guide your project through every stage of growth with
              care, expertise, and unwavering attention to detail.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full" />
                Agile Methodology
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full" />
                Transparent Communication
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className="group flex gap-6 p-6 hover:border-primary/50 transition-all duration-300"
              >
                <span className="font-serif text-4xl font-bold text-primary/30 group-hover:text-primary transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
