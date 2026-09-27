'use client'

import Link from 'next/link'
import { Stethoscope, ArrowRight, Award, GraduationCap } from 'lucide-react'

const FeaturedDoctorsSection = () => {
  const featuredDoctors = [
    {
      name: "Dr. Vikas Sengar",
      qualification: "MBBS, MD, DM (Gastroenterology)",
      specialty: "Consultant Gastroenterologist & Hepatologist",
      experience: "10+ Years Experience",
      expertise: ["Advanced Endoscopy", "ERCP", "Liver Disorders", "Digestive Health"],
      description: "Distinguished gastroenterologist with advanced training from SGPGI Lucknow, specializing in complex gastrointestinal disorders."
    },
    {
      name: "Dr. Sangeeta Sengar",
      qualification: "MBBS, MS (ENT)",
      specialty: "Senior ENT Specialist",
      experience: "12+ Years Experience",
      expertise: ["Neuro-Otology", "Sialendoscopy", "Pediatric ENT", "Voice Disorders"],
      description: "Highly respected ENT specialist with expertise in neuro-otology and minimally invasive treatments."
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-medical-600 font-semibold text-sm uppercase tracking-wider">Our Medical Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Meet Our <span className="text-gradient">Leading Specialists</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hospital is founded and led by experienced medical professionals dedicated to providing exceptional healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredDoctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up">
              {/* Doctor Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-medical-100 p-3 rounded-xl">
                  <Stethoscope className="w-8 h-8 text-medical-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-medical-600 font-semibold mb-1">{doctor.qualification}</p>
                  <p className="text-gray-600 font-medium">{doctor.specialty}</p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium">{doctor.experience}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{doctor.description}</p>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-medical-600" />
                  Key Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <Link 
                href="/contact"
                className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold group"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">Want to learn more about our medical team?</p>
          <Link 
            href="/doctors"
            className="btn-primary group w-fit flex items-center justify-center mx-auto"
          >
            View All Doctors
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedDoctorsSection