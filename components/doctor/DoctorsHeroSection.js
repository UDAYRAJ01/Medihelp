'use client'

import { Stethoscope, Award, Users, GraduationCap } from 'lucide-react'

const DoctorsHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-yellow-300">Expert Doctors</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our team of experienced medical professionals is dedicated to providing 
            exceptional healthcare with expertise, compassion, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Stethoscope className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Expert Care</h3>
            <p className="text-blue-100 text-sm">Specialized medical expertise across multiple disciplines</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <GraduationCap className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Advanced Training</h3>
            <p className="text-blue-100 text-sm">Qualifications from premier medical institutions</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Award className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Experience</h3>
            <p className="text-blue-100 text-sm">Years of clinical experience and successful treatments</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
            <Users className="w-10 h-10 mx-auto mb-3 text-yellow-300" />
            <h3 className="font-bold text-lg mb-2">Patient-Focused</h3>
            <p className="text-blue-100 text-sm">Compassionate care tailored to individual needs</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-blue-100 mb-6">
            Schedule a consultation with our specialists for personalized healthcare
          </p>
          <a 
            href="#contact"
            className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  )
}

export default DoctorsHeroSection