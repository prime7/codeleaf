"use client"

import { Users, Award, Clock, Leaf } from "lucide-react"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const stats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Leaf, value: "100%", label: "Client Retention" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-primary/10">
              <Image src="/diverse-team-of-developers-collaborating-in-modern.jpg" alt="CodeLeaf Team" width={400} height={400} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl">
              <p className="font-serif text-3xl font-bold">2016</p>
              <p className="text-sm opacity-80">Founded</p>
            </div>
          </div>

          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">Rooted in Excellence</h2>
            <p className="text-lg text-muted-foreground mb-6">
              CodeLeaf was born from a simple belief: technology should grow naturally with your business, not against
              it. Our team of passionate engineers and designers brings together decades of combined experience in
              building solutions that stand the test of time.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              We&apos;re not just developers—we&apos;re partners in your success. Every line of code we write, every system we
              architect, is designed with your long-term growth in mind.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
