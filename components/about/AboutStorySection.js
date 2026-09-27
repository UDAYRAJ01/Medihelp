'use client'

import { Calendar, Users, Building, Heart } from 'lucide-react'

const AboutStorySection = () => {
  const timeline = [
    {
      year: "2019",
      title: "Foundation",
      description: "Medi Help Hospital was founded by Dr. Vikas Sengar and Dr. Sangeeta Sengar with a vision to provide world-class healthcare in Kanpur."
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Added state-of-the-art diagnostic facilities and expanded our multi-specialty services to serve more patients."
    },
    {
      year: "2021",
      title: "Recognition",
      description: "Gained recognition as one of Kanpur's trusted healthcare institutions with growing patient satisfaction."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Introduced telemedicine services and advanced minimally invasive procedures to enhance patient care."
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a vision to transform healthcare in Kanpur to becoming a trusted medical institution, 
            here's our story of growth and commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Beginning</h3>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Medi Help Hospital was born from a shared vision of Dr. Vikas Sengar and Dr. Sangeeta Sengar 
                to bridge the gap between advanced medical care and compassionate treatment in Kanpur, Uttar Pradesh.
              </p>
              <p>
                With their combined expertise in gastroenterology and ENT care, along with training from 
                prestigious institutions like SGPGI Lucknow, they established a hospital that would prioritize 
                both clinical excellence and patient comfort.
              </p>
              <p>
                Since our founding in 2019, we have remained committed to our core values of compassion, 
                innovation, and patient-centric care. Every decision we make is guided by one simple question: 
                "What's best for our patients?"
              </p>
            </div>
          </div>

          {/* Founders */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-medical-50 to-accent-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Our Founders</h4>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-100 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Dr. Vikas Sengar</h5>
                    <p className="text-medical-600 font-medium">Founder & Chief Gastroenterologist</p>
                    <p className="text-gray-600 text-sm mt-1">
                      DM Gastroenterology from SGPGI Lucknow, specializing in advanced endoscopic procedures
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-medical-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">Dr. Sangeeta Sengar</h5>
                    <p className="text-medical-600 font-medium">Co-Founder & Senior ENT Specialist</p>
                    <p className="text-gray-600 text-sm mt-1">
                      MS ENT with specialization in Neuro-Otology and minimally invasive treatments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Growth Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-medical-200"></div>
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-medical-600 font-bold text-xl mb-2">{event.year}</div>
                      <h4 className="font-bold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-medical-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStorySection