'use client'

import { useState } from 'react'
import { Mail, Send, CheckCircle, Bell } from 'lucide-react'

const BlogNewsletterSection = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 5000)
    }
  }

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Health Tips
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive the latest health insights, 
              medical tips, and wellness advice directly in your inbox.
            </p>
          </div>

          {/* Newsletter Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Bell className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">Weekly Health Tips</h3>
              <p className="text-blue-100 text-sm">Expert advice delivered every week</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">Latest Articles</h3>
              <p className="text-blue-100 text-sm">Be first to read new health content</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold mb-2">Exclusive Content</h3>
              <p className="text-blue-100 text-sm">Subscriber-only health resources</p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Join 5,000+ Health-Conscious Readers</h3>
            
            {subscribed ? (
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <span className="text-lg font-semibold text-green-400">
                  Thank you for subscribing! Check your email for confirmation.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-white text-medical-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center whitespace-nowrap"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Subscribe
                  </button>
                </div>
              </form>
            )}

            <p className="text-blue-100 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time. No spam, ever.
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">5,000+</div>
              <div className="text-blue-100 text-sm">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">50+</div>
              <div className="text-blue-100 text-sm">Health Articles Published</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">95%</div>
              <div className="text-blue-100 text-sm">Reader Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">Weekly</div>
              <div className="text-blue-100 text-sm">Fresh Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogNewsletterSection