'use client'

import { Heart, Award, Users, Clock, Calendar } from 'lucide-react'

const AboutHeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-bg text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About <span className="text-yellow-300">Medi Help Hospital</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Founded in 2019, we have rapidly emerged as one of the most trusted healthcare 
              institutions in Kanpur, Uttar Pradesh, delivering world-class medical care with 
              compassion and innovation.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="font-semibold">Established</span>
                </div>
                <p className="text-2xl font-bold">2019</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="font-semibold">Patients Served</span>
                </div>
                <p className="text-2xl font-bold">1000+</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Our Foundation</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Heart className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Patient Care</h4>
                  <p className="text-blue-100 text-sm">Compassionate healthcare for all</p>
                </div>
                <div className="text-center">
                  <Award className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Excellence</h4>
                  <p className="text-blue-100 text-sm">Highest quality medical services</p>
                </div>
                <div className="text-center">
                  <Users className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">Expert Team</h4>
                  <p className="text-blue-100 text-sm">Experienced medical professionals</p>
                </div>
                <div className="text-center">
                  <Clock className="w-10 h-10 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-bold text-lg">24/7 Care</h4>
                  <p className="text-blue-100 text-sm">Always available when needed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection