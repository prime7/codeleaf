"use client"

import { cn } from "@/lib/utils"

interface CodeLeafLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function CodeLeafLogo({ className, size = "md", showText = true }: CodeLeafLogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-3xl" },
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        width={sizes[size].icon}
        height={sizes[size].icon}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Leaf shape with code brackets integrated */}
        <path d="M32 4C32 4 8 16 8 36C8 50 18 60 32 60C46 60 56 50 56 36C56 16 32 4 32 4Z" className="fill-primary" />
        {/* Leaf vein / stem */}
        <path
          d="M32 12V52M32 20C26 24 22 30 22 36M32 28C38 32 42 38 42 44"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="stroke-primary-foreground"
        />
        {/* Code bracket left */}
        <path
          d="M20 28L16 32L20 36"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary-foreground"
        />
        {/* Code bracket right */}
        <path
          d="M44 28L48 32L44 36"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-primary-foreground"
        />
      </svg>
      {showText && (
        <span className={cn("font-serif font-bold tracking-tight text-foreground", sizes[size].text)}>
          Code<span className="text-primary">Leaf</span>
        </span>
      )}
    </div>
  )
}
