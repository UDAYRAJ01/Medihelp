'use client'

import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      age: "45 years",
      treatment: "Gastroenterology Treatment",
      rating: 5,
      text: "Dr. Vikas Sengar provided excellent care during my treatment. The staff was very professional and the facilities are top-notch. I'm completely satisfied with the service.",
      location: "Kanpur, UP"
    },
    {
      name: "Priya Sharma",
      age: "32 years",
      treatment: "ENT Treatment",
      rating: 5,
      text: "Dr. Sangeeta Sengar's expertise in ENT care is remarkable. She explained everything clearly and the treatment was painless. Highly recommend this hospital.",
      location: "Lucknow, UP"
    },
    {
      name: "Amit Singh",
      age: "28 years",
      treatment: "Emergency Care",
      rating: 5,
      text: "The emergency team at Medi Help Hospital saved my life. Their quick response and professional care during a critical situation was outstanding. Forever grateful!",
      location: "Kanpur, UP"
    },
    {
      name: "Sunita Devi",
      age: "58 years",
      treatment: "General Check-up",
      rating: 5,
      text: "Very impressed with the cleanliness, staff behavior, and modern equipment. The doctors take time to listen and explain everything properly.",
      location: "Unnao, UP"
    }
  ]

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">Patient Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read testimonials from our satisfied patients who have experienced excellent care at Medi Help Hospital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-medical-100" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.age} • {testimonial.location}</p>
                    <p className="text-medical-600 text-sm font-medium mt-1">{testimonial.treatment}</p>
                  </div>
                  <div className="bg-medical-50 p-2 rounded-lg">
                    <div className="w-8 h-8 bg-medical-200 rounded-full flex items-center justify-center">
                      <span className="text-medical-700 font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-600 mb-2">1000+</div>
              <p className="text-gray-700 font-medium">Satisfied Patients</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Patient Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-600 mb-2">5★</div>
              <p className="text-gray-700 font-medium">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Share your experience with us</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Write a Review
            </a>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              View All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection