'use client'

import Link from 'next/link'
import { 
  Activity, 
  Stethoscope, 
  Heart, 
  Eye, 
  Baby, 
  Brain,
  Bone,
  UserCheck,
  Scissors,
  Zap,
  Camera,
  HeartHandshake,
  ArrowRight,
  Star
} from 'lucide-react'

const AllServicesSection = () => {
  const featuredServices = [
    {
      icon: Activity,
      title: "Gastroenterology",
      description: "Advanced endoscopy, ERCP, and comprehensive digestive health care with state-of-the-art equipment.",
      features: ["Advanced Endoscopy", "ERCP Procedures", "Liver Care", "Digestive Disorders"],
      link: "/services/gastroenterology",
      featured: true,
      doctor: "Dr. Vikas Sengar"
    },
    {
      icon: Stethoscope,
      title: "ENT Services",
      description: "Complete ear, nose, and throat care including neuro-otology and minimally invasive treatments.",
      features: ["Neuro-Otology", "Sialendoscopy", "Hearing Care", "Pediatric ENT"],
      link: "/services/ent",
      featured: true,
      doctor: "Dr. Sangeeta Sengar"
    },
    {
      icon: Zap,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency medical services with immediate response for critical conditions.",
      features: ["Trauma Care", "Cardiac Emergencies", "Critical Care", "Ambulance Service"],
      link: "/services/emergency-care",
      featured: true,
      doctor: "Emergency Medical Team"
    }
  ]

  const allServices = [
    {
      icon: Heart,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic capabilities",
      link: "/services/cardiology"
    },
    {
      icon: UserCheck,
      title: "Urology",
      description: "Urinary system and male reproductive health treatment",
      link: "/services/urology"
    },
    {
      icon: Brain,
      title: "Oncology",
      description: "Cancer diagnosis, treatment and comprehensive care",
      link: "/services/oncology"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Complete eye care and vision correction services",
      link: "/services/ophthalmology"
    },
    {
      icon: Bone,
      title: "Orthopaedics",
      description: "Bone, joint and musculoskeletal treatment",
      link: "/services/orthopaedics"
    },
    {
      icon: HeartHandshake,
      title: "Nephrology",
      description: "Kidney health and comprehensive renal care",
      link: "/services/nephrology"
    },
    {
      icon: Baby,
      title: "Gynaecology & Obstetrics",
      description: "Women's health and comprehensive maternity care",
      link: "/services/gynecology"
    },
    {
      icon: Baby,
      title: "Paediatrics",
      description: "Specialized healthcare for infants and children",
      link: "/services/pediatrics"
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "General internal medicine and health management",
      link: "/services/internal-medicine"
    },
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Minimal access and traditional surgical procedures",
      link: "/services/surgery"
    },
    {
      icon: Camera,
      title: "Radiology",
      description: "Advanced diagnostic imaging and interpretation",
      link: "/services/radiology"
    }
  ]

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-gradient">Healthcare Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From specialized treatments to routine care, we offer comprehensive medical services 
            with experienced doctors and modern facilities.
          </p>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured Specialties</h3>
            <p className="text-gray-600">Our core specialties with dedicated expert physicians</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-medical-500">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-100 p-3 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-medical-600" />
                  </div>
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-medical-600 font-medium text-sm mb-4">{service.doctor}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-3">Key Services:</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href={service.link}
                  className="inline-flex items-center text-medical-600 hover:text-medical-700 font-semibold group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">All Medical Services</h3>
            <p className="text-gray-600">Complete range of medical specialties available</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md card-hover animate-slide-up">
                <div className="bg-medical-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-medical-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <Link 
                  href={service.link}
                  className="text-medical-600 hover:text-medical-700 font-medium text-sm inline-flex items-center group"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We Deliver Care
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our systematic approach ensures you receive the best possible care at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
              <p className="text-gray-600 text-sm">Initial assessment and medical history review</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-bold text-gray-900 mb-2">Diagnosis</h4>
              <p className="text-gray-600 text-sm">Advanced diagnostic testing and analysis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-bold text-gray-900 mb-2">Treatment</h4>
              <p className="text-gray-600 text-sm">Personalized treatment plan implementation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-bold text-gray-900 mb-2">Follow-up</h4>
              <p className="text-gray-600 text-sm">Ongoing monitoring and care coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllServicesSection