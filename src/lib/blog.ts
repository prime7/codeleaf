import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  authorRole: string
  readingTime: string
  content: string
  ogImage?: string
  keywords: string[]
}

export function getAllPosts(): BlogPost[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "Untitled",
        excerpt: data.excerpt || "",
        category: data.category || "General",
        date: data.date || new Date().toISOString().split("T")[0],
        author: data.author || "CodeLeaf Team",
        authorRole: data.authorRole || "AI Automation Experts",
        readingTime: data.readingTime || `${Math.ceil(content.split(" ").length / 200)} min read`,
        content,
        ogImage: data.ogImage,
        keywords: data.keywords || [],
      } as BlogPost
    })

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || "Untitled",
    excerpt: data.excerpt || "",
    category: data.category || "General",
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "CodeLeaf Team",
    authorRole: data.authorRole || "AI Automation Experts",
    readingTime: data.readingTime || `${Math.ceil(content.split(" ").length / 200)} min read`,
    content,
    ogImage: data.ogImage,
    keywords: data.keywords || [],
  } as BlogPost
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  
  return result.toString()
}
