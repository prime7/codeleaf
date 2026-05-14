import type { Metadata } from "next"
import { TerminalNav } from "@/components/page/terminal-nav"
import { MatrixFooter } from "@/components/page/matrix-footer"
import { InsightsList } from "@/components/page/insights-list"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "AI Automation Insights for Alberta Businesses | CodeLeaf",
  description:
    "Practical guidance on AI automation, chatbots, voice agents, and lead generation for Edmonton and Calgary businesses. Learn how Alberta companies are using AI to grow.",
  keywords: [
    "AI automation tips Alberta",
    "AI chatbot guide Edmonton",
    "AI voice agent Calgary",
    "lead generation automation Alberta",
    "AI for small business Canada",
  ],
  openGraph: {
    title: "AI Automation Insights for Alberta Businesses | CodeLeaf",
    description: "Practical AI automation guidance for Edmonton and Calgary businesses.",
    url: "https://codeleaf.ca/insights/",
  },
}

export default function InsightsPage() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    readingTime: post.readingTime,
  }))

  return (
    <main className="relative min-h-screen overflow-hidden bg-background noise">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <TerminalNav />
      <InsightsList posts={posts} />
      <MatrixFooter />
    </main>
  )
}
