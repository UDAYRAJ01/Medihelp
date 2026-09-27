import { notFound } from 'next/navigation'
import BlogDetailHero from '@/components/blog/BlogDetailHero'
import BlogDetailContent from '@/components/blog/BlogDetailContent'
import RelatedBlogPostsSection from '@/components/blog/RelatedBlogPostsSection'
import BlogCommentsSection from '@/components/blog/BlogCommentsSection'
import { getBlogBySlug, blogPosts } from '@/lib/blogData'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug)
  if (!post) return { title: 'Blog Post Not Found | Medi Help Hospital Kanpur' }
  return {
    title: `${post.title} | Medi Help Hospital Kanpur`,
    description: `${post.excerpt} Learn more from specialists at Medi Help Hospital, Sarvodaya Nagar, Kanpur.`,
    keywords: `${post.category}, health blog Kanpur, medical advice Kanpur, Medi Help Hospital, doctor advice Kanpur`,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

export default function BlogDetailPage({ params }) {
  const post = getBlogBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="overflow-x-hidden">
      <BlogDetailHero post={post} />
      <BlogDetailContent post={post} />
      <RelatedBlogPostsSection currentSlug={post.slug} />
      <BlogCommentsSection />
    </div>
  )
}