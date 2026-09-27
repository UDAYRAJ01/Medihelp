'use client'

import { Play, MapPin, Eye, Camera, Users, Bed, Heart, Coffee, Activity } from 'lucide-react'

const VirtualTourSection = () => {
  const tourAreas = [
    {
      icon: Users,
      title: "Reception & Lobby",
      description: "Welcoming entrance with comfortable seating and information desk",
      duration: "2 min tour"
    },
    {
      icon: Bed,
      title: "Patient Rooms",
      description: "Modern, comfortable rooms designed for patient recovery and comfort",
      duration: "3 min tour"
    },
    {
      icon: Camera,
      title: "Diagnostic Center",
      description: "State-of-the-art imaging and laboratory facilities",
      duration: "4 min tour"
    },
    {
      icon: Heart,
      title: "Emergency Department",
      description: "Fully equipped emergency care facility with advanced life support",
      duration: "3 min tour"
    },
    {
      icon: Activity,
      title: "Operating Theaters",
      description: "Modern surgical suites with advanced equipment and technology",
      duration: "5 min tour"
    },
    {
      icon: Coffee,
      title: "Patient Amenities",
      description: "Cafeteria, waiting areas, and comfort facilities for patients and families",
      duration: "2 min tour"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Virtual <span className="text-gradient">Hospital Tour</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern facilities and see the comfortable, 
            state-of-the-art environment where we provide exceptional healthcare.
          </p>
        </div>

        {/* Main Virtual Tour */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Tour Preview */}
            <div className="bg-gradient-to-br from-medical-100 to-accent-100 rounded-2xl h-80 flex items-center justify-center relative">
              <div className="text-center text-medical-600">
                <div className="bg-white/90 p-6 rounded-full mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <Play className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Virtual Hospital Tour</h3>
                <p className="text-lg">Explore our facilities from home</p>
              </div>
              <button className="absolute inset-0 w-full h-full bg-medical-600/10 hover:bg-medical-600/20 rounded-2xl transition-colors group">
                <Play className="w-16 h-16 text-medical-600 mx-auto group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Tour Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience Our Hospital Virtually</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Eye className="w-5 h-5 text-medical-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">360° Views</h4>
                    <p className="text-gray-600 text-sm">Complete panoramic views of all major areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="w-5 h-5 text-medical-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">HD Quality</h4>
                    <p className="text-gray-600 text-sm">High-definition imagery for detailed exploration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-medical-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Interactive Navigation</h4>
                    <p className="text-gray-600 text-sm">Easy navigation between different areas</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Virtual Tour
                </button>
                <button className="bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-6 rounded-lg border-2 border-medical-600 transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tour Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Different Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 card-hover animate-slide-up">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-100 p-3 rounded-lg flex-shrink-0">
                    <area.icon className="w-6 h-6 text-medical-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{area.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="bg-medical-50 text-medical-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {area.duration}
                      </span>
                      <button className="text-medical-600 hover:text-medical-700 font-medium text-sm flex items-center">
                        <Play className="w-4 h-4 mr-1" />
                        Tour Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Visit CTA */}
        <div className="bg-gradient-to-r from-medical-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Visit Us in Person?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a personal visit to meet our team and see our facilities firsthand. 
            We'd be happy to show you around and answer any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-white text-medical-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Visit
            </a>
            <a 
              href="tel:+919839800199"
              className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +91 98398 00199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualTourSection