'use client'

import { MapPin, Phone, Clock, Mail, Calendar, Users, Car, Wifi } from 'lucide-react'

const ContactInfoSection = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Hospital Address",
      info: "K-117, 22, Sarvodaya Nagar, Kanpur, Uttar Pradesh – 208005",
      action: "Get Directions",
      link: "https://maps.google.com/?q=K-117,22,Sarvodaya+Nagar,Kanpur,Uttar+Pradesh+208005"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      info: "+91 98398 00199 (Main Line & Emergency)",
      action: "Call Now",
      link: "tel:+919839800199"
    },
    {
      icon: Mail,
      title: "Email Address",
      info: "info@medihelpkanpur.com",
      action: "Send Email",
      link: "mailto:info@medihelpkanpur.com"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      info: "Open 24 Hours, 7 Days a Week",
      action: null,
      link: null
    }
  ]

  const departments = [
    {
      name: "Emergency Department",
      hours: "24/7 Available",
      phone: "+91 98398 00199",
      description: "Immediate care for urgent medical conditions"
    },
    {
      name: "Outpatient Services",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
      phone: "+91 98398 00199",
      description: "Regular consultations and follow-up visits"
    },
    {
      name: "Laboratory Services",
      hours: "Mon-Sat: 8:00 AM - 8:00 PM",
      phone: "+91 98398 00199",
      description: "Blood tests and diagnostic services"
    },
    {
      name: "Radiology Department",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
      phone: "+91 98398 00199",
      description: "X-ray, ultrasound, and imaging services"
    }
  ]

  const amenities = [
    { icon: Car, name: "Free Parking", description: "Ample parking space available" },
    { icon: Wifi, name: "Free WiFi", description: "Complimentary internet access" },
    { icon: Users, name: "Waiting Areas", description: "Comfortable seating for families" },
    { icon: Calendar, name: "Online Booking", description: "Easy appointment scheduling" }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hospital <span className="text-gradient">Information</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about visiting Medi Help Hospital, 
            including location, hours, and contact details.
          </p>
        </div>

        {/* Main Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactDetails.map((detail, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center card-hover">
              <div className="bg-medical-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <detail.icon className="w-8 h-8 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{detail.title}</h4>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{detail.info}</p>
              {detail.action && (
                <a
                  href={detail.link}
                  target={detail.link?.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-medical-600 hover:text-medical-700 font-semibold text-sm"
                >
                  {detail.action} →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Department Hours */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Department Hours & Contact
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <h4 className="font-bold text-gray-900 mb-2">{dept.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-medical-600 mr-2" />
                    <span className="text-gray-700 text-sm font-medium">{dept.hours}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-medical-600 mr-2" />
                    <a 
                      href={`tel:${dept.phone.replace(/\s+/g, '')}`}
                      className="text-medical-600 hover:text-medical-700 text-sm font-medium"
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hospital Amenities */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Hospital Amenities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <amenity.icon className="w-6 h-6 text-medical-600" />
                </div>
                <h5 className="font-bold text-gray-900 mb-2">{amenity.name}</h5>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation & Accessibility */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Car className="w-5 h-5 text-medical-600 mr-2" />
              Getting Here
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">By Car</h5>
                <p className="text-gray-600 text-sm">
                  Located in Sarvodaya Nagar with easy access from major roads. 
                  Free parking available on premises.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">By Public Transport</h5>
                <p className="text-gray-600 text-sm">
                  Well-connected by local buses and auto-rickshaws. 
                  Nearest landmark: Sarvodaya Nagar Market.
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-900 mb-1">Emergency Transport</h5>
                <p className="text-gray-600 text-sm">
                  Our ambulance service can pick up patients from anywhere in Kanpur. 
                  Call +91 98398 00199 for emergency transport.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 text-medical-600 mr-2" />
              Patient Guidelines
            </h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">
                  Bring valid ID proof and insurance cards for all visits
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">
                  Arrive 15 minutes early for scheduled appointments
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">
                  Carry previous medical reports and prescription history
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">
                  Follow hospital safety protocols including mask wearing
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 text-sm">
                  Limit visitors to maintain a peaceful environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection