'use client'

import { Coffee, Wifi, Car, Users, Heart, Clock, Shield, Phone } from 'lucide-react'

const AmenitiesSection = () => {
  const amenities = [
    {
      icon: Coffee,
      title: "Hospital Cafeteria",
      description: "Fresh meals, snacks, and beverages available 24/7 for patients and visitors",
      hours: "24/7 Available"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Complimentary high-speed internet access throughout the hospital premises",
      hours: "Always On"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Ample parking space available for patients and visitors at no charge",
      hours: "24/7 Access"
    },
    {
      icon: Users,
      title: "Comfortable Waiting Areas",
      description: "Spacious waiting lounges with comfortable seating and entertainment",
      hours: "Always Available"
    },
    {
      icon: Heart,
      title: "Prayer Room",
      description: "Peaceful multi-faith prayer and meditation space for spiritual comfort",
      hours: "24/7 Open"
    },
    {
      icon: Phone,
      title: "Patient Information Desk",
      description: "Dedicated help desk for patient inquiries and assistance",
      hours: "24/7 Staffed"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Round-the-clock security for patient and visitor safety",
      hours: "24/7 Security"
    },
    {
      icon: Clock,
      title: "Visiting Hours Support",
      description: "Extended visiting hours with comfortable facilities for families",
      hours: "Flexible Hours"
    }
  ]

  const patientComforts = [
    {
      title: "Room Amenities",
      items: ["Air conditioning", "Television", "Private bathrooms", "Comfortable beds"]
    },
    {
      title: "Family Support",
      items: ["Attendant seating", "Meal facilities", "Communication support", "Guest accommodation"]
    },
    {
      title: "Accessibility",
      items: ["Wheelchair access", "Elevator services", "Accessible restrooms", "Ramps and rails"]
    },
    {
      title: "Entertainment",
      items: ["Reading materials", "Television channels", "Music system", "Recreation area"]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient <span className="text-gradient">Amenities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive amenities and comfort services to make your 
            hospital experience as pleasant and convenient as possible.
          </p>
        </div>

        {/* Main Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md card-hover animate-slide-up">
              <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <amenity.icon className="w-6 h-6 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{amenity.title}</h4>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{amenity.description}</p>
              <div className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold">
                {amenity.hours}
              </div>
            </div>
          ))}
        </div>

        {/* Patient Comfort Details */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Patient Comfort Features
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {patientComforts.map((comfort, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-900 mb-4">{comfort.title}</h4>
                <ul className="space-y-2">
                  {comfort.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600 text-sm">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special Services */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-medical-50 to-blue-50 rounded-2xl p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Heart className="w-5 h-5 text-medical-600 mr-2" />
              Family Support Services
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Dedicated family consultation rooms for private discussions</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Support services for out-of-city patients and families</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Childcare assistance during medical procedures</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Translation services for better communication</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-purple-50 rounded-2xl p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="w-5 h-5 text-purple-600 mr-2" />
              Safety & Security
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">24/7 security personnel and CCTV monitoring</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Emergency call systems in all patient areas</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Fire safety systems and evacuation procedures</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">Secure storage for patient valuables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmenitiesSection