'use client'

import { 
  Activity, 
  Heart, 
  Eye, 
  Baby, 
  Brain, 
  Bone,
  Stethoscope,
  UserCheck,
  Scissors,
  Zap,
  Camera,
  HeartHandshake
} from 'lucide-react'

const SpecialtiesSection = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Gastroenterology",
      description: "Endoscopy, Colonoscopy, ERCP, Liver & Digestive Care",
      featured: true
    },
    {
      icon: Stethoscope,
      title: "ENT",
      description: "Ear, Nose & Throat Disorders, Neuro-Otology",
      featured: true
    },
    {
      icon: Heart,
      title: "Cardiology",
      description: "Heart conditions, cardiac care and monitoring"
    },
    {
      icon: UserCheck,
      title: "Urology",
      description: "Urinary system and male reproductive health"
    },
    {
      icon: Brain,
      title: "Oncology",
      description: "Cancer diagnosis, treatment and care"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care and vision services"
    },
    {
      icon: Bone,
      title: "Orthopaedics",
      description: "Bone, joint and musculoskeletal care"
    },
    {
      icon: HeartHandshake,
      title: "Nephrology",
      description: "Kidney health and dialysis services"
    },
    {
      icon: Baby,
      title: "Gynaecology & Obstetrics",
      description: "Women's health and maternity care"
    },
    {
      icon: Baby,
      title: "Paediatrics",
      description: "Comprehensive child healthcare"
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "General internal medicine and diagnostics"
    },
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Minimal Access and traditional surgical procedures"
    },
    {
      icon: Zap,
      title: "Anaesthesiology",
      description: "Pain management and surgical anaesthesia"
    },
    {
      icon: Camera,
      title: "Radiology",
      description: "Advanced diagnostic imaging services"
    }
  ]

  return (
    <section id="specialties" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Medical <span className="text-gradient">Specialties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical and surgical services across multiple specialties, ensuring complete healthcare under one roof.
          </p>
        </div>

        {/* Featured Specialties */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {specialties.filter(specialty => specialty.featured).map((specialty, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-slide-up border-l-4 border-medical-500">
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-4 rounded-xl">
                  <specialty.icon className="w-8 h-8 text-medical-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{specialty.description}</p>
                  <div className="mt-4">
                    <span className="inline-block bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-sm font-medium">
                      Featured Specialty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Other Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specialties.filter(specialty => !specialty.featured).map((specialty, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg card-hover animate-slide-up">
              <div className="bg-medical-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <specialty.icon className="w-8 h-8 text-medical-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{specialty.title}</h4>
              <p className="text-gray-600 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-medical-600 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Specialized Care?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experienced specialists is ready to provide you with personalized, 
              world-class medical care across all specialties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary bg-white text-medical-600 hover:bg-gray-100">
                Book Consultation
              </a>
              <a href="tel:+919839800199" className="btn-secondary border-white hover:bg-white hover:text-medical-600">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialtiesSection