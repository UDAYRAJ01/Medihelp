'use client'

import { useState } from 'react'
import { MessageCircle, User, Calendar, Send, ThumbsUp, Reply } from 'lucide-react'

const BlogCommentsSection = () => {
  const [newComment, setNewComment] = useState({
    name: '',
    email: '',
    comment: ''
  })

  const [comments] = useState([
    {
      id: 1,
      name: "Priya Sharma",
      date: "August 16, 2024",
      comment: "Very informative article! I've been experiencing some digestive issues and this really helped me understand what I should be looking out for. Thank you for the clear explanations.",
      likes: 5,
      replies: [
        {
          id: 1,
          name: "Dr. Vikas Sengar",
          date: "August 16, 2024", 
          comment: "Thank you for your feedback, Priya. If you're experiencing persistent digestive issues, I'd recommend scheduling a consultation for proper evaluation.",
          isDoctor: true
        }
      ]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      date: "August 15, 2024",
      comment: "Excellent tips! I've started following some of these dietary recommendations and already feel better. Great work by the medical team.",
      likes: 3,
      replies: []
    },
    {
      id: 3,
      name: "Sunita Devi",
      date: "August 14, 2024", 
      comment: "This article answered many questions I had about digestive health. The prevention tips are very practical and easy to follow.",
      likes: 7,
      replies: []
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Comment submitted:', newComment)
    alert('Thank you for your comment! It will be reviewed before publishing.')
    setNewComment({ name: '', email: '', comment: '' })
  }

  const handleChange = (e) => {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <MessageCircle className="w-6 h-6 text-medical-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Comments ({comments.length})
            </h2>
          </div>

          {/* Comments List */}
          <div className="space-y-6 mb-12">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white rounded-xl shadow-md p-6">
                {/* Comment Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-medical-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{comment.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-medical-600 transition-colors">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-sm">{comment.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-medical-600 transition-colors">
                      <Reply className="w-4 h-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                  </div>
                </div>

                {/* Comment Content */}
                <p className="text-gray-600 leading-relaxed mb-4">{comment.comment}</p>

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="border-l-2 border-medical-200 pl-6 space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-medical-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-medical-200 w-8 h-8 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-medical-600" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h5 className="font-semibold text-gray-900">{reply.name}</h5>
                              {reply.isDoctor && (
                                <span className="bg-medical-600 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                                  Doctor
                                </span>
                              )}
                            </div>
                            <div className="flex items-center text-gray-500 text-xs">
                              <Calendar className="w-3 h-3 mr-1" />
                              <span>{reply.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{reply.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Leave a Comment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newComment.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={newComment.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Your email address"
                  />
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comment *
                </label>
                <textarea
                  name="comment"
                  value={newComment.comment}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 resize-none"
                  placeholder="Share your thoughts or questions about this article..."
                ></textarea>
              </div>

              {/* Guidelines */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">Comment Guidelines</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Please keep comments respectful and relevant to the article</li>
                  <li>• Medical advice in comments is not a substitute for professional consultation</li>
                  <li>• All comments are moderated before publication</li>
                  <li>• For urgent medical concerns, please contact our hospital directly</li>
                </ul>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Comment
              </button>
            </form>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 bg-medical-50 border border-medical-200 rounded-xl p-6">
            <h4 className="font-bold text-medical-800 mb-2">Medical Disclaimer</h4>
            <p className="text-medical-700 text-sm">
              Comments and responses in this section are for informational purposes only. 
              They should not be considered as medical advice. Always consult with qualified 
              healthcare professionals for personalized medical guidance and treatment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCommentsSection