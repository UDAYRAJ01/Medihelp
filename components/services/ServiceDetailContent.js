'use client'

import { CheckCircle, AlertTriangle, Info, Phone, Calendar, Award } from 'lucide-react'

const ServiceDetailContent = ({ service }) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Service Overview */}
            <div className="animate-slide-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                About Our {service.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.content}
              </p>

              {/* Key Benefits */}
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-green-800 mb-3">Why Choose This Service?</h4>
                    <ul className="text-green-700 space-y-2">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Expert specialists with years of experience</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>State-of-the-art equipment and technology</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Comprehensive care and personalized treatment plans</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Follow-up care and ongoing support</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Services We Provide</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.services.map((item, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 card-hover">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item}</h4>
                        <p className="text-gray-600 text-sm">Professional {item.toLowerCase()} services with expert care</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procedures */}
            <div className="animate-slide-up">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Procedures</h3>
              <div className="space-y-6">
                {service.procedures.map((procedure, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-medical-500">
                    <h4 className="font-bold text-gray-900 mb-3">{procedure.name}</h4>
                    <p className="text-gray-600 leading-relaxed">{procedure.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Information */}
            <div className="space-y-6 animate-slide-up">
              {/* Preparation Info */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-blue-800 mb-3">Before Your Visit</h4>
                    <ul className="text-blue-700 space-y-2">
                      <li>• Bring all relevant medical records and previous test results</li>
                      <li>• List all current medications and supplements</li>
                      <li>• Arrive 15 minutes early for check-in and paperwork</li>
                      <li>• Bring insurance cards and identification</li>
                      <li>• Follow any specific preparation instructions given</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Medical Disclaimer */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2">Important Note</h4>
                    <p className="text-yellow-700 leading-relaxed">
                      This information is for educational purposes only and should not replace 
                      professional medical advice. Always consult with qualified healthcare 
                      providers for diagnosis and treatment recommendations specific to your condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Appointment Booking */}
            <div className="bg-medical-600 rounded-xl p-6 text-white sticky top-8">
              <h4 className="font-bold text-xl mb-4">Book Your Consultation</h4>
              <p className="text-blue-100 mb-6">
                Ready to get expert care? Schedule your appointment with our specialists today.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Next available: Tomorrow</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">Call for urgent appointments</span>
                </div>
              </div>
              <div className="space-y-3">
                <a 
                  href="/contact"
                  className="w-full bg-white text-medical-600 hover:bg-gray-100 py-3 px-4 rounded-lg font-semibold transition-colors text-center block"
                >
                  Book Online
                </a>
                <a 
                  href="tel:+919839800199"
                  className="w-full border-2 border-white text-white hover:bg-white hover:text-medical-600 py-3 px-4 rounded-lg font-semibold transition-colors text-center block"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Doctor Profile */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-bold text-gray-900 mb-4">Your Specialist</h4>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-medical-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">{service.doctor.name}</h5>
                  <p className="text-gray-600 text-xs font-semibold text-medical-600 mb-1">{service.doctor.specialty || service.doctor.qualification}</p>
                  {service.doctor.experience && (
                    <span className="inline-block bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-200">
                      {service.doctor.experience}
                    </span>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.doctor.description || `Experienced specialist with ${service.doctor.experience} in treating complex conditions.`}
              </p>

              {service.doctor.education && (
                <div className="mb-4 pt-3 border-t border-gray-100">
                  <h6 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Education & Training</h6>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {service.doctor.education.map((edu, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-medical-500 mr-1.5">•</span>
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.doctor.expertise && (
                <div className="mb-2 pt-3 border-t border-gray-100">
                  <h6 className="font-bold text-gray-900 text-xs uppercase tracking-wider mb-2">Clinical Expertise</h6>
                  <ul className="text-xs text-gray-600 space-y-1.5">
                    {service.doctor.expertise.map((exp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent-500 mr-1.5">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <a 
                href="/doctors"
                className="text-medical-600 hover:text-medical-700 font-semibold text-sm block mt-4 pt-2 border-t border-gray-100"
              >
                View Full Profile →
              </a>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Need Help?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-medical-600 mr-2" />
                  <span>+91 98398 00199</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 text-medical-600 mr-2" />
                  <span>Mon-Sat: 9 AM - 6 PM</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h4 className="font-bold text-red-800 mb-2">Emergency?</h4>
              <p className="text-red-700 text-sm mb-4">
                For medical emergencies, don't wait for an appointment.
              </p>
              <a 
                href="tel:+919839800199"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors block text-center"
              >
                Emergency: +91 98398 00199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetailContent