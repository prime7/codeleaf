"use client"

interface AvatarPlaceholderProps {
  name: string
  size?: number
  className?: string
}

export function AvatarPlaceholder({ name, size = 64, className = "" }: AvatarPlaceholderProps) {
  // Extract initials
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  // Generate a consistent color from the name
  const colors = [
    { bg: "#0f3d2e", text: "#4ade80" },
    { bg: "#1e3a5f", text: "#60a5fa" },
    { bg: "#3f1e47", text: "#c084fc" },
    { bg: "#5f3a1e", text: "#fb923c" },
    { bg: "#2d3a1e", text: "#a3e635" },
    { bg: "#3a1e2d", text: "#f472b6" },
  ]
  const colorIndex = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length
  const { bg, text } = colors[colorIndex]

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`Avatar for ${name}`}
    >
      <rect width="64" height="64" rx="8" fill={bg} />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={text}
        fontSize="24"
        fontWeight="600"
        fontFamily="system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  )
}
