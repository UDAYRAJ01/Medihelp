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
  Camera,
  Activity,
  Shield
} from 'lucide-react'

const AllFacilitiesSection = () => {
  const emergencyFacilities = [
    {
      icon: Clock,
      title: "24/7 Emergency Department",
      description: "Round-the-clock emergency medical services with immediate triage and care for trauma, cardiac, and critical cases.",
      features: ["Immediate Triage", "Advanced Life Support", "Trauma Care", "Cardiac Emergency"]
    },
    {
      icon: Heart,
      title: "Intensive Care Units (ICU)",
      description: "Specialized ICUs including Medical, Surgical, Cardiac & Neonatal units with advanced monitoring systems.",
      features: ["Medical ICU", "Surgical ICU", "Cardiac ICU", "Neonatal ICU"]
    }
  ]

  const diagnosticFacilities = [
    {
      icon: Camera,
      title: "Advanced Diagnostic Imaging",
      description: "Comprehensive imaging services with latest technology for accurate diagnosis and treatment planning.",
      features: ["Digital X-ray", "Ultrasound", "CT Scan", "MRI", "Mammography"]
    },
    {
      icon: TestTube,
      title: "Fully Equipped Laboratory",
      description: "State-of-the-art laboratory services for comprehensive diagnostic testing and analysis.",
      features: ["Blood Chemistry", "Hematology", "Microbiology", "Pathology", "Hormone Tests"]
    }
  ]

  const surgicalFacilities = [
    {
      icon: Scissors,
      title: "Modern Operating Theaters",
      description: "Advanced surgical suites equipped with latest technology for complex procedures and minimally invasive surgery.",
      features: ["Laminar Air Flow", "Advanced Anesthesia", "Surgical Microscopes", "Endoscopic Equipment"]
    },
    {
      icon: Activity,
      title: "Specialized Procedure Rooms",
      description: "Dedicated rooms for endoscopy, colonoscopy, and other specialized diagnostic and therapeutic procedures.",
      features: ["Endoscopy Suite", "Colonoscopy Room", "ERCP Facility", "Minor Procedure Rooms"]
    }
  ]

  const patientCareFacilities = [
    {
      icon: Bed,
      title: "Comfortable Inpatient Wards",
      description: "Well-appointed patient rooms designed for comfort and recovery with modern amenities.",
      features: ["Private Rooms", "Shared Rooms", "Family Accommodation", "Nurse Call System"]
    },
    {
      icon: Users,
      title: "Outpatient Clinics",
      description: "Multiple specialty consultation rooms for outpatient care and follow-up visits.",
      features: ["Consultation Rooms", "Examination Areas", "Waiting Lounges", "Reception Services"]
    }
  ]

  const supportFacilities = [
    {
      icon: Pill,
      title: "24-Hour Pharmacy",
      description: "In-house pharmacy with round-the-clock availability of essential medications and prescriptions.",
      features: ["Prescription Medicines", "Over-the-counter Drugs", "Emergency Medications", "Home Delivery"]
    },
    {
      icon: Phone,
      title: "Telemedicine Center",
      description: "Digital healthcare services for remote consultations and follow-up care.",
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions", "Online Reports"]
    }
  ]

  return (
    <section id="facilities" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete <span className="text-gradient">Medical Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hospital is equipped with comprehensive medical facilities to provide 
            complete healthcare services under one roof.
          </p>
        </div>

        {/* Emergency & Critical Care */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Emergency & Critical Care</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {emergencyFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-xl mr-4">
                    <facility.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-semibold">
                    CRITICAL CARE
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnostic Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Diagnostic Services</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {diagnosticFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-xl mr-4">
                    <facility.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    DIAGNOSTICS
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Surgical Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Surgical Services</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {surgicalFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-xl mr-4">
                    <facility.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    SURGICAL
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Care Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Patient Care</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {patientCareFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-xl mr-4">
                    <facility.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    PATIENT CARE
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Support Services</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {supportFacilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up border-l-4 border-orange-500">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-xl mr-4">
                    <facility.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                    SUPPORT
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quality & Safety Standards
            </h3>
            <p className="text-gray-600 text-lg">
              All our facilities maintain the highest standards of quality, safety, and hygiene.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Safety First</h4>
              <p className="text-gray-600 text-sm">Strict safety protocols</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Latest Technology</h4>
              <p className="text-gray-600 text-sm">Modern equipment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Patient Comfort</h4>
              <p className="text-gray-600 text-sm">Comfortable environment</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">Expert Staff</h4>
              <p className="text-gray-600 text-sm">Trained professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllFacilitiesSection