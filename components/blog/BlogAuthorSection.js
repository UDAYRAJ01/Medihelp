'use client'

import { Stethoscope, GraduationCap, Award, Calendar } from 'lucide-react'

const BlogAuthorSection = ({ author }) => {
  // Default author info for different types
  const getAuthorDetails = (authorName) => {
    switch (authorName) {
      case 'Dr. Vikas Sengar':
        return {
          name: 'Dr. Vikas Sengar',
          role: 'Consultant Gastroenterologist & Hepatologist',
          credentials: 'MBBS, MD (Medicine), DM (Gastroenterology)',
          bio: 'Dr. Vikas Sengar is a distinguished gastroenterologist with advanced training from SGPGI Lucknow. He specializes in complex gastrointestinal disorders and advanced endoscopic procedures.',
          experience: '10+ years',
          specializations: ['Advanced Endoscopy', 'ERCP', 'Liver Disorders', 'Digestive Health'],
          education: 'DM Gastroenterology from SGPGI, Lucknow'
        }
      case 'Dr. Sangeeta Sengar':
        return {
          name: 'Dr. Sangeeta Sengar',
          role: 'Senior ENT Specialist (Otolaryngologist)',
          credentials: 'MBBS, MS (ENT)',
          bio: 'Dr. Sangeeta Sengar is a highly respected ENT specialist with expertise in neuro-otology and minimally invasive treatments for ear, nose, and throat conditions.',
          experience: '12+ years',
          specializations: ['Neuro-Otology', 'Sialendoscopy', 'Hearing Disorders', 'Pediatric ENT'],
          education: 'MS ENT from GSVM Medical College, Kanpur'
        }
      case 'Emergency Medical Team':
        return {
          name: 'Emergency Medical Team',
          role: 'Emergency Care Specialists',
          credentials: 'Emergency Medicine Specialists',
          bio: 'Our emergency medical team consists of experienced physicians and nurses trained in critical care and emergency medicine.',
          experience: 'Collective 50+ years',
          specializations: ['Emergency Medicine', 'Critical Care', 'Trauma Management', 'Life Support'],
          education: 'Various medical institutions'
        }
      default:
        return {
          name: 'Medical Team',
          role: 'Healthcare Professionals',
          credentials: 'Various Medical Specialties',
          bio: 'Our medical team consists of experienced healthcare professionals dedicated to providing accurate and helpful medical information.',
          experience: 'Collective 100+ years',
          specializations: ['General Medicine', 'Preventive Care', 'Health Education', 'Patient Care'],
          education: 'Various medical institutions'
        }
    }
  }

  const authorDetails = getAuthorDetails(author.name)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            About the Author
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Author Image */}
              <div className="lg:col-span-1">
                <div className="bg-medical-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto">
                  <Stethoscope className="w-16 h-16 text-medical-600" />
                </div>
              </div>

              {/* Author Details */}
              <div className="lg:col-span-3">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{authorDetails.name}</h3>
                  <p className="text-medical-600 font-semibold text-lg mb-1">{authorDetails.role}</p>
                  <p className="text-gray-600">{authorDetails.credentials}</p>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{authorDetails.bio}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Experience */}
                  <div>
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 text-medical-600 mr-2" />
                      <h4 className="font-bold text-gray-900">Experience</h4>
                    </div>
                    <p className="text-gray-600">{authorDetails.experience} of medical practice</p>
                  </div>

                  {/* Education */}
                  <div>
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-5 h-5 text-medical-600 mr-2" />
                      <h4 className="font-bold text-gray-900">Education</h4>
                    </div>
                    <p className="text-gray-600">{authorDetails.education}</p>
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {authorDetails.specializations.map((spec, index) => (
                      <span 
                        key={index}
                        className="bg-medical-100 text-medical-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {authorDetails.name.startsWith('Dr.') && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Need personalized medical advice? Consult with {authorDetails.name} at Medi Help Hospital.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="/contact"
                        className="bg-medical-600 hover:bg-medical-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                      >
                        Book Appointment
                      </a>
                      <a 
                        href="/doctors"
                        className="bg-white hover:bg-gray-50 text-medical-600 px-6 py-3 rounded-lg font-semibold border-2 border-medical-600 transition-colors text-center"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Medical Team Note */}
          <div className="mt-8 bg-medical-50 border border-medical-200 rounded-xl p-6 text-center">
            <h4 className="font-bold text-medical-800 mb-2">Medical Content Review</h4>
            <p className="text-medical-700 text-sm">
              All health articles at Medi Help Hospital are reviewed by qualified medical professionals 
              to ensure accuracy and reliability of medical information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogAuthorSection