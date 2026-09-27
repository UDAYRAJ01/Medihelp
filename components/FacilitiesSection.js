'use client'

import { 
  Clock, 
  Zap, 
  TestTube, 
  Scissors, 
  Heart, 
  Bed, 
  Users, 
  Pill,
  Phone,
  Wifi,
  Car,
  Coffee
} from 'lucide-react'

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Clock,
      title: "24/7 Emergency Department",
      description: "Immediate care for trauma, cardiac, and critical cases with round-the-clock medical staff",
      category: "Emergency Care"
    },
    {
      icon: Zap,
      title: "Advanced Diagnostic Imaging",
      description: "X-ray, Ultrasound, CT, MRI, Mammography with latest technology",
      category: "Diagnostics"
    },
    {
      icon: TestTube,
      title: "Fully Equipped Laboratories",
      description: "Comprehensive diagnostic testing including blood, urine, and microbiology",
      category: "Laboratory"
    },
    {
      icon: Scissors,
      title: "Modern Operating Theaters",
      description: "Advanced surgical equipment for complex procedures with sterile environments",
      category: "Surgery"
    },
    {
      icon: Heart,
      title: "Specialized ICUs",
      description: "Medical, Surgical, Cardiac & Neonatal Intensive Care Units",
      category: "Critical Care"
    },
    {
      icon: Bed,
      title: "Comfortable Inpatient Wards",
      description: "Spacious and well-equipped recovery rooms for patient comfort",
      category: "Patient Care"
    },
    {
      icon: Users,
      title: "Outpatient Clinics",
      description: "Multi-specialty consultations & follow-ups in comfortable settings",
      category: "Consultation"
    },
    {
      icon: Pill,
      title: "In-House Pharmacy",
      description: "Round-the-clock access to essential medicines and prescriptions",
      category: "Pharmacy"
    },
    {
      icon: Phone,
      title: "Telemedicine Services",
      description: "Online consultations for remote patients via video call or phone",
      category: "Digital Health"
    }
  ]

  const amenities = [
    { icon: Coffee, title: "Cafeteria", description: "Fresh meals and beverages" },
    { icon: Users, title: "Waiting Lounges", description: "Comfortable seating areas" },
    { icon: Heart, title: "Prayer Room", description: "Peaceful space for reflection" },
    { icon: Car, title: "Ample Parking", description: "Convenient vehicle parking" },
    { icon: Wifi, title: "Free WiFi", description: "Internet access throughout" },
    { icon: Clock, title: "Rehabilitation", description: "Physiotherapy & speech therapy" }
  ]

  return (
    <section id="facilities" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            World-Class <span className="text-gradient">Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art infrastructure and modern technology to deliver high-quality healthcare with patient comfort in mind.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-3 rounded-lg flex-shrink-0">
                  <facility.icon className="w-6 h-6 text-medical-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-semibold text-medical-600 bg-medical-50 px-2 py-1 rounded-full mr-2">
                      {facility.category}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{facility.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Patient Amenities */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Patient Amenities
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We provide additional comforts and conveniences to make your hospital experience as pleasant as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center space-x-3 shadow-sm card-hover">
                <div className="bg-medical-100 p-2 rounded-lg">
                  <amenity.icon className="w-5 h-5 text-medical-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">{amenity.title}</h5>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Highlight */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Cutting-Edge Medical Technology
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Advanced endoscopy and colonoscopy equipment for precise diagnostics</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">State-of-the-art imaging technology including CT, MRI, and ultrasound</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Modern surgical equipment for minimally invasive procedures</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-medical-500 rounded-full mt-2"></div>
                  <p className="text-gray-600">Comprehensive laboratory automation for accurate test results</p>
                </div>
              </div>
            </div>
            <div className="bg-medical-50 rounded-xl p-8 text-center">
              <Zap className="w-16 h-16 text-medical-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation Driven</h4>
              <p className="text-gray-600">
                We continuously invest in the latest medical technology to ensure our patients receive 
                the most advanced and effective treatments available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection