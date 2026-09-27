import BlogHeroSection from '@/components/blog/BlogHeroSection'
import BlogCategoriesSection from '@/components/blog/BlogCategoriesSection'
import StaticAllBlogPostsSection from '@/components/blog/StaticAllBlogPostsSection'
import BlogNewsletterSection from '@/components/blog/BlogNewsletterSection'

export const metadata = {
  title: 'Health & Medical Blog Kanpur | Expert Tips by Dr. Vikas & Dr. Sangeeta Sengar',
  description: 'Read trusted medical blogs, gastroenterology guides, ENT care tips, and health advice written by specialists at Medi Help Hospital, Sarvodaya Nagar, Kanpur.',
  keywords: 'health blog Kanpur, gastro doctor blog Kanpur, ENT health tips Kanpur, Dr Vikas Sengar articles, Dr Sangeeta Sengar ENT blog, medical advice Kanpur',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Health & Medical Blog | Medi Help Hospital Kanpur',
    description: 'Expert health tips, symptoms guides, and medical advice from top specialists in Kanpur.',
    url: 'https://themedihelp.com/blog',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function BlogPage() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://themedihelp.com/blog#blog",
        "url": "https://themedihelp.com/blog",
        "name": "Medi Help Hospital Health & Medical Blog",
        "description": "Evidence-based health guides, ENT insights, and gastroenterology advice for patients in Kanpur.",
        "publisher": {
          "@type": "Hospital",
          "name": "Medi Help Hospital Kanpur",
          "url": "https://themedihelp.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/blog#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://themedihelp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://themedihelp.com/blog"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <BlogHeroSection />
      <BlogCategoriesSection />
      <StaticAllBlogPostsSection />
      <BlogNewsletterSection />
    </div>
  )
}
