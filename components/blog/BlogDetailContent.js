'use client'

import { AlertTriangle, CheckCircle, Info, Phone } from 'lucide-react'

const BlogDetailContent = ({ post }) => {


  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <div className="blog-content prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Medical Disclaimer */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2">Medical Disclaimer</h4>
                    <p className="text-yellow-700 text-sm leading-relaxed">
                      This article is for informational purposes only and should not replace professional medical advice.
                      Always consult with qualified healthcare providers for diagnosis and treatment recommendations
                      specific to your condition.
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="bg-medical-50 border border-medical-200 rounded-xl p-6 my-8">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-medical-600 mt-1 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-bold text-medical-800 mb-2">Need Professional Advice?</h4>
                    <p className="text-medical-700 mb-4 leading-relaxed">
                      If you have concerns about the topics discussed in this article,
                      our experienced medical team is here to help with personalized care.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="bg-medical-600 hover:bg-medical-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                      >
                        Book Consultation
                      </a>
                      <a
                        href="tel:+919839800199"
                        className="bg-white hover:bg-gray-50 text-medical-600 px-4 py-2 rounded-lg font-medium border-2 border-medical-600 transition-colors text-center flex items-center justify-center"
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-green-800 mb-3">Key Takeaways</h4>
                      <ul className="text-green-700 space-y-2">
                        {post.keyTakeaways.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            {/* Related Articles */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <div className="space-y-4">
                <a href="/blog/heart-health-warning-signs" className="block group">
                  <h4 className="font-medium text-gray-900 group-hover:text-medical-600 mb-1">
                    Heart Health Warning Signs
                  </h4>
                  <p className="text-gray-600 text-sm">Learn the early signs of heart problems...</p>
                </a>
                <a href="/blog/diabetes-management-tips" className="block group">
                  <h4 className="font-medium text-gray-900 group-hover:text-medical-600 mb-1">
                    Managing Diabetes Effectively
                  </h4>
                  <p className="text-gray-600 text-sm">Practical advice for diabetes management...</p>
                </a>
                <a href="/blog/mental-health-awareness" className="block group">
                  <h4 className="font-medium text-gray-900 group-hover:text-medical-600 mb-1">
                    Mental Health Awareness
                  </h4>
                  <p className="text-gray-600 text-sm">Understanding mental health conditions...</p>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-3 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contact
              </h3>
              <p className="text-red-700 text-sm mb-4">
                If you're experiencing a medical emergency, don't wait. Call our emergency line immediately.
              </p>
              <a
                href="tel:+919839800199"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors block text-center"
              >
                Emergency: +91 98398 00199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetailContent