'use client'

import { BookOpen, Users, Heart, TrendingUp } from 'lucide-react'

const BlogHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Health <span className="text-yellow-300">Blog & Insights</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Expert medical advice, health tips, and latest healthcare insights from our 
            experienced doctors and medical professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <BookOpen className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Expert Articles</h3>
            <p className="text-blue-100 text-sm">Written by qualified medical professionals</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Heart className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Health Tips</h3>
            <p className="text-blue-100 text-sm">Practical advice for better health</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <TrendingUp className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Latest Trends</h3>
            <p className="text-blue-100 text-sm">Current healthcare developments</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Patient Stories</h3>
            <p className="text-blue-100 text-sm">Real experiences and success stories</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-100 mb-6">
            Stay informed about health and wellness with trusted medical content
          </p>
          <a 
            href="#blog-posts"
            className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Read Latest Articles
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogHeroSection