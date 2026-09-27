'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react'

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  })

  const doctors = [
    'Dr. Vikas Sengar - Gastroenterology',
    'Dr. Sangeeta Sengar - ENT'
  ]

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Appointment request:', formData)
    alert('Appointment request submitted! We will contact you soon to confirm.')
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    })
  }

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Book an <span className="text-yellow-300">Appointment</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Schedule a consultation with our expert doctors. We'll confirm your appointment 
            and send you all the necessary details.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Appointment Form */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Schedule Your Visit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor *
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                >
                  <option value="">Choose a doctor</option>
                  {doctors.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <div className="relative">
                  <MessageCircle className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-medical-500 focus:border-medical-500 resize-none"
                    placeholder="Describe your symptoms or reason for visit..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Request Appointment
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <a 
                  href="tel:+919839800199"
                  className="flex items-center space-x-3 bg-red-600 hover:bg-red-700 p-4 rounded-lg transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Emergency</p>
                    <p className="text-sm">+91 98398 00199</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+919839800199"
                  className="flex items-center space-x-3 bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors"
                >
                  <Calendar className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Appointments</p>
                    <p className="text-sm">+91 98398 00199</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Only</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Services</span>
                  <span>24/7 Available</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-300 text-medical-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                  <p className="text-sm">Submit your appointment request</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-300 text-medical-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                  <p className="text-sm">We'll call to confirm within 2 hours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-300 text-medical-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                  <p className="text-sm">Receive confirmation details via SMS</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-yellow-300 text-medical-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</div>
                  <p className="text-sm">Visit the hospital at scheduled time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppointmentSection