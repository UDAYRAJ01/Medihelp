'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, User } from 'lucide-react'
import { blogPosts } from '@/lib/blogData'

const RelatedBlogPostsSection = ({ currentSlug }) => {
  const relatedPosts = blogPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, 2)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">Read More</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-4">
            Related <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Continue reading more health articles and medical insights from our experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {relatedPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
              {/* Blog Image */}
              <div className="relative h-52 bg-gradient-to-br from-medical-100 to-accent-100 overflow-hidden">
                <Image
                  src={post.featuredImage?.url}
                  alt={post.featuredImage?.alt || post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mt-3 mb-3 leading-snug">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-medical-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="text-medical-600 hover:text-medical-700 font-semibold text-sm inline-flex items-center group"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Explore More Health Articles
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay informed with our comprehensive collection of health articles,
              medical tips, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                View All Articles
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-6 rounded-lg border-2 border-medical-600 transition-colors"
              >
                Ask Our Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedBlogPostsSection
