import { notFound } from 'next/navigation'
import { getBlogBySlug, blogPosts } from '@/lib/blogData'
import BlogDetailHero from '@/components/blog/BlogDetailHero'
import BlogDetailContent from '@/components/blog/BlogDetailContent'
import RelatedBlogPostsSection from '@/components/blog/RelatedBlogPostsSection'
import BlogNewsletterSection from '@/components/blog/BlogNewsletterSection'

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    const post = getBlogBySlug(params.slug)
    if (!post) return { title: 'Blog Post Not Found | Medi Help Hospital Kanpur' }
    
    const imageUrl = post.featuredImage?.url?.startsWith('http') 
        ? post.featuredImage.url 
        : `https://themedihelp.com${post.featuredImage?.url || '/images/gallery/1.jpg'}`

    return {
        title: `${post.title} | Medi Help Hospital Kanpur`,
        description: `${post.excerpt} Expert medical insights by ${post.author || 'medical specialists'} at Medi Help Hospital, Sarvodaya Nagar, Kanpur.`,
        keywords: `${post.category}, ${post.title.toLowerCase()}, ENT hospital Kanpur, gastroenterologist Kanpur, health tips Kanpur, medical advice Kanpur, Dr Vikas Sengar, Dr Sangeeta Sengar, Medi Help Hospital Sarvodaya Nagar`,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: `${post.title} | Medi Help Hospital Kanpur`,
            description: post.excerpt,
            url: `https://themedihelp.com/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.publishDate,
            authors: [post.author || 'Dr. Sangeeta Sengar'],
            section: post.category || 'Healthcare',
            tags: [post.category, 'Healthcare', 'Kanpur', 'Medi Help Hospital'],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 675,
                    alt: post.featuredImage?.alt || post.title,
                }
            ],
            siteName: 'Medi Help Hospital Kanpur',
            locale: 'en_IN',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        }
    }
}

export default function BlogDetailPage({ params }) {
    const post = getBlogBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const imageUrl = post.featuredImage?.url?.startsWith('http') 
        ? post.featuredImage.url 
        : `https://themedihelp.com${post.featuredImage?.url || '/images/gallery/1.jpg'}`

    const isEnt = post.category?.toLowerCase().includes('ent') || post.author?.includes('Sangeeta')
    const authorName = post.author || (isEnt ? 'Dr. Sangeeta Sengar' : 'Dr. Vikas Sengar')
    const authorSpecialty = isEnt ? 'Senior ENT Specialist & Otolaryngologist' : 'Consultant Gastroenterologist & Hepatologist'

    const blogSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalWebPage",
                "@id": `https://themedihelp.com/blog/${post.slug}#webpage`,
                "url": `https://themedihelp.com/blog/${post.slug}`,
                "name": post.title,
                "description": post.excerpt,
                "inLanguage": ["hi", "en"],
                "isPartOf": {
                    "@id": "https://themedihelp.com/#website"
                },
                "breadcrumb": {
                    "@id": `https://themedihelp.com/blog/${post.slug}#breadcrumb`
                },
                "author": {
                    "@type": "Person",
                    "name": authorName,
                    "jobTitle": authorSpecialty,
                    "worksFor": {
                        "@type": "Hospital",
                        "name": "Medi Help Hospital Kanpur",
                        "url": "https://themedihelp.com"
                    }
                }
            },
            {
                "@type": "BlogPosting",
                "@id": `https://themedihelp.com/blog/${post.slug}#article`,
                "isPartOf": {
                    "@id": `https://themedihelp.com/blog/${post.slug}#webpage`
                },
                "headline": post.title,
                "description": post.excerpt,
                "url": `https://themedihelp.com/blog/${post.slug}`,
                "mainEntityOfPage": `https://themedihelp.com/blog/${post.slug}`,
                "datePublished": post.publishDate || "2026-09-14",
                "dateModified": new Date().toISOString(),
                "articleSection": post.category || "ENT",
                "image": [imageUrl],
                "author": {
                    "@type": "Person",
                    "name": authorName,
                    "jobTitle": authorSpecialty,
                    "url": "https://themedihelp.com/doctors"
                },
                "publisher": {
                    "@type": "Hospital",
                    "name": "Medi Help Hospital",
                    "url": "https://themedihelp.com",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://themedihelp.com/images/medihelp-hospital-logo.png"
                    }
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://themedihelp.com/blog/${post.slug}#breadcrumb`,
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
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": post.title,
                        "item": `https://themedihelp.com/blog/${post.slug}`
                    }
                ]
            }
        ]
    }

    return (
        <div className="overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
            <BlogDetailHero post={post} />
            <BlogDetailContent post={post} />
            <RelatedBlogPostsSection currentSlug={post.slug} />
            <BlogNewsletterSection />
        </div>
    )
}
