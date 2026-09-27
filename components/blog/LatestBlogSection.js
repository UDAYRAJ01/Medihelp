'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, User } from 'lucide-react'
import { blogPosts } from '@/lib/blogData'

const LatestBlogSection = () => {

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">Health Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Latest Health <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our expert medical advice, health tips, and latest healthcare insights from our specialists.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up group">
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-medical-100 to-accent-100 overflow-hidden">
                <Image
                  src={post.featuredImage?.url}
                  alt={post.featuredImage?.alt || post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-medical-600 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Explore more health tips and medical insights</p>
          <Link
            href="/blog"
            className="btn-primary group w-fit flex items-center justify-center mx-auto"
          >
            View More Blogs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-medical-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with Health Tips
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest health insights, medical tips, and hospital updates.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-medical-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlogSection