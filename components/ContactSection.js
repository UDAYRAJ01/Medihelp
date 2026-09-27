'use client'

import { useState } from 'react'
import { MapPin, Phone, Clock, Mail, Send, User, MessageCircle, Calendar } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    specialty: '',
    message: ''
  })

  const specialties = [
    'Gastroenterology',
    'ENT (Ear, Nose & Throat)',
    'Cardiology',
    'Urology',
    'Oncology',
    'Ophthalmology',
    'Orthopaedics',
    'Nephrology',
    'Gynaecology & Obstetrics',
    'Paediatrics',
    'Internal Medicine',
    'General Surgery'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your backend or email service
    alert('Thank you for your message! We will contact you soon.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      specialty: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-gradient">Medi Help Hospital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your health is our priority. Get in touch with us to schedule an appointment or for any healthcare inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hospital Address</h4>
                  <p className="text-gray-600">
                    K-117, 22, Sarvodaya Nagar,<br />
                    Kanpur, Uttar Pradesh – 208005
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
                  <a href="tel:+919839800199" className="text-medical-600 hover:text-medical-700 font-medium">
                    +91 98398 00199
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hospital Hours</h4>
                  <p className="text-gray-600">Open 24 Hours</p>
                  <p className="text-sm text-gray-500">Emergency services available round the clock</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@medihelpkanpur.com" className="text-medical-600 hover:text-medical-700">
                    info@medihelpkanpur.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="tel:+919839800199" className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Emergency</span>
                </a>
                <button className="flex items-center justify-center space-x-2 bg-medical-600 hover:bg-medical-700 text-white p-3 rounded-lg transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">Book Appointment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                {/* Specialty */}
                <div>
                  <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-2">
                    Medical Specialty
                  </label>
                  <select
                    id="specialty"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300"
                  >
                    <option value="">Select a specialty</option>
                    {specialties.map((specialty, index) => (
                      <option key={index} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 transition-colors duration-300 resize-none"
                      placeholder="Describe your inquiry or symptoms..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-100 rounded-2xl p-4">
            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">K-117, 22, Sarvodaya Nagar, Kanpur</p>
                <p className="text-sm mt-2">
                  <a 
                    href="https://maps.google.com/?q=K-117,22,Sarvodaya+Nagar,Kanpur,Uttar+Pradesh+208005" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-medical-600 hover:text-medical-700 underline"
                  >
                    View on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection