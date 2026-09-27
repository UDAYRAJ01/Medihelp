 
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight, Eye } from 'lucide-react'
import Image from 'next/image'; 

import Post from '@/models/Post';
import dbConnect from '@/lib/dbConnect';

export const dynamic = "force-dynamic"

function calculateReadingTime(content) {
  if (!content) return 0;
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

async function getPosts() {
  await dbConnect() 
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .limit(3)
    .lean()
    console.log(posts)
    console.log('=========================')
  return JSON.parse(JSON.stringify(posts))
}
console.log('This is Working...')
async function getAllPosts() {
  await dbConnect()
  const posts = await Post.find({ status: "published" })
    .sort({ createdAt: -1 })
    .lean()
  return JSON.parse(JSON.stringify(posts))
}

const AllBlogPostsSection = async ({searchParams}) => { 
  const Scategory = searchParams?.category;

  let featuredPosts = ''
  let blogPosts = '' 
  if(Scategory){
    let featuredPosts2 = await getPosts()
    let blogPosts2 = await getAllPosts()

    blogPosts = blogPosts2 
    .filter(post => {
      if (!Scategory) return true; // No category → show all
      return post.categories[0]?.includes(Scategory);
    });

    featuredPosts = featuredPosts2 
    .filter(post => {
      if (!Scategory) return true; // No category → show all
      return post.categories[0]?.includes(Scategory);
    });

    alert('a')


  }else{
    featuredPosts = await getPosts()
    blogPosts = await getAllPosts()
  }

  console.log(featuredPosts)
  console.log(blogPosts)

  
 
  const categories = [
    "All Posts",
    "Gastroenterology", 
    "ENT",
    "Emergency Care",
    "Cardiology",
    "Internal Medicine",
    "Pediatrics",
    "Gynecology",
    "Mental Health",
    "General Health"
  ]

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

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-medical-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-medical-100 hover:text-medical-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover animate-slide-up">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-medical-100 to-accent-100 flex items-center justify-center">
                  <Image 
                    src={post?.featuredImage?.url}              // Image URL or /public path
                    alt={post?.featuredImage?.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.categories}
                    </span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/${post.slug}`}
                      className="hover:text-medical-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm">
                    {post.metaDescription}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-xs">
                    <div className="flex items-center text-gray-500">
                      <User className="w-3 h-3 mr-1" />
                      <span>Med Help</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-500"> 
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{calculateReadingTime(post.content)} min</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4">
                    <Link 
                      href={`/${post.slug}`}
                      className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold text-sm group"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover animate-slide-up">
                {/* Image Placeholder */}
                <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Image
                    src={post?.featuredImage?.url}              // Image URL or /public path
                    alt={post?.featuredImage?.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  {/* Category */}
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">
                    {post.categories[0]}
                  </span>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">
                    <Link 
                      href={`/${post.slug}`}
                      className="hover:text-medical-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h4>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.metaDescription}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>Medi Help</span>
                    <div className="flex items-center space-x-2">
                       
                      <span>{calculateReadingTime(post.content)} min</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link 
                    href={`/${post.slug}`}
                    className="text-medical-600 hover:text-medical-700 font-medium text-sm inline-flex items-center group"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
 
      </div>
    </section>
  )
}

export default AllBlogPostsSection