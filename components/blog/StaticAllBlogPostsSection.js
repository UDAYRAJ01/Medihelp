'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Clock, ArrowRight, User } from 'lucide-react'
import { blogPosts } from '@/lib/blogData'

const categories = [
    "All Posts",
    "Gastroenterology",
    "ENT",
    "Emergency Care",
]

const StaticAllBlogPostsSection = () => {
    return (
        <section id="blog-posts" className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Latest <span className="text-gradient">Health Articles</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Stay informed with expert medical advice, health tips, and insights
                        from our healthcare professionals.
                    </p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category, index) => (
                        <span
                            key={index}
                            className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0
                                    ? 'bg-medical-600 text-white'
                                    : 'bg-gray-100 text-gray-700'
                                }`}
                        >
                            {category}
                        </span>
                    ))}
                </div>

                {/* Blog Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up group"
                        >
                            {/* Image */}
                            <div className="relative h-52 bg-gradient-to-br from-medical-100 to-accent-100 overflow-hidden">
                                <Image
                                    src={post.featuredImage?.url}
                                    alt={post.featuredImage?.alt || post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                {/* Category & Read Time */}
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
                                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="hover:text-medical-600 transition-colors line-clamp-2"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>

                                {/* Excerpt */}
                                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                                    {post.excerpt}
                                </p>

                                {/* Author */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <User className="w-4 h-4 mr-2" />
                                        <span>{post.author}</span>
                                    </div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold text-sm group"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StaticAllBlogPostsSection
