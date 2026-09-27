'use client'

import { MapPin, Navigation, Phone, Clock, Car, Bus } from 'lucide-react'

const LocationMapSection = () => {
  const nearbyLandmarks = [
    {
      name: "Sarvodaya Nagar Market",
      distance: "200m",
      direction: "East"
    },
    {
      name: "Government Hospital",
      distance: "500m", 
      direction: "North"
    },
    {
      name: "Railway Station",
      distance: "3.5km",
      direction: "Southwest"
    },
    {
      name: "Mall Road",
      distance: "2.8km",
      direction: "West"
    }
  ]

  const directions = [
    {
      from: "Kanpur Central Railway Station",
      distance: "3.5 km",
      time: "12 minutes",
      route: "Head north on Station Road → Turn right on Mall Road → Continue to Sarvodaya Nagar"
    },
    {
      from: "Kanpur Airport",
      distance: "12 km",
      time: "25 minutes",
      route: "Take Airport Road → Merge onto NH19 → Follow signs to Sarvodaya Nagar"
    },
    {
      from: "Civil Lines",
      distance: "4.2 km",
      time: "15 minutes",
      route: "Take Civil Lines Road → Turn left on Birhana Road → Continue to Sarvodaya Nagar"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find <span className="text-gradient">Our Location</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located in Sarvodaya Nagar, Kanpur with easy access 
            from all parts of the city.
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="bg-gradient-to-br from-medical-100 to-accent-100 rounded-xl h-96 flex items-center justify-center mb-6">
            <div className="text-center text-medical-600">
              <MapPin className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
              <p className="text-lg mb-4">K-117, 22, Sarvodaya Nagar, Kanpur, UP 208005</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://maps.google.com/?q=K-117,22,Sarvodaya+Nagar,Kanpur,Uttar+Pradesh+208005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </a>
                <a 
                  href="tel:+919839800199"
                  className="bg-white hover:bg-gray-50 text-medical-600 px-6 py-3 rounded-lg font-semibold border-2 border-medical-600 transition-colors flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Directions
                </a>
              </div>
            </div>
          </div>
          
          {/* Address Details */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Full Address</h4>
              <p className="text-gray-600 text-sm">
                K-117, 22, Sarvodaya Nagar<br />
                Kanpur, Uttar Pradesh – 208005
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Always Open</h4>
              <p className="text-gray-600 text-sm">
                24 Hours a Day<br />
                7 Days a Week
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Car className="w-6 h-6 text-medical-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Free Parking</h4>
              <p className="text-gray-600 text-sm">
                Ample parking space<br />
                Available for patients
              </p>
            </div>
          </div>
        </div>

        {/* Nearby Landmarks */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Nearby Landmarks</h3>
            <div className="space-y-4">
              {nearbyLandmarks.map((landmark, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-medical-600 mr-3" />
                    <span className="font-medium text-gray-900">{landmark.name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-medical-600 font-semibold text-sm">{landmark.distance}</p>
                    <p className="text-gray-500 text-xs">{landmark.direction}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Transportation Options</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Car className="w-5 h-5 text-medical-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">Private Vehicle</h5>
                  <p className="text-gray-600 text-sm">Free parking available on hospital premises</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Bus className="w-5 h-5 text-medical-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">Public Transport</h5>
                  <p className="text-gray-600 text-sm">Local buses and auto-rickshaws available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-medical-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900">Emergency Ambulance</h5>
                  <p className="text-gray-600 text-sm">24/7 ambulance service: +91 98398 00199</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions from Major Locations */}
        <div className="bg-gradient-to-r from-medical-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Directions from Major Locations
          </h3>
          
          <div className="space-y-6">
            {directions.map((direction, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-lg">{direction.from}</h4>
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full font-semibold">
                      {direction.distance}
                    </span>
                    <span className="text-gray-600">{direction.time}</span>
                  </div>
                </div>
                <p className="text-gray-600">{direction.route}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Need specific directions or having trouble finding us?</p>
            <a 
              href="tel:+919839800199"
              className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Help: +91 98398 00199
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationMapSection