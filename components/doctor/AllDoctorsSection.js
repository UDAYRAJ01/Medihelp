'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Stethoscope, Award, GraduationCap, Calendar, MapPin } from 'lucide-react'

const AllDoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Vikas Sengar",
      image: '/images/dr-vikash-sengar.png',
      credentials: "MBBS, MD (Medicine), DM (Gastroenterology)",
      specialty: "Consultant Gastroenterologist & Hepatologist",
      experience: "10+ Years Experience",
      education: [
        "MBBS – GSVM Medical College, Kanpur",
        "MD (Internal Medicine) – GSVM Medical College, Kanpur",
        "DM (Gastroenterology) – SGPGI, Lucknow"
      ],
      expertise: [
        "Advanced Endoscopy & Colonoscopy",
        "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
        "Cholangioscopy",
        "Management of Liver, Pancreatic & Digestive Disorders"
      ],
      description: "Dr. Vikas Sengar is a distinguished name in the field of Gastroenterology and Digestive Health. With advanced training from SGPGI Lucknow and extensive experience in treating complex gastrointestinal disorders, he is known for his precision, compassion, and patient-first approach.",
      availability: "Mon-Sat: 9:00 AM - 6:00 PM",
      consultationFee: "₹800"
    },
    {
      name: "Dr. Sangeeta Sengar",
      image: '/images/Sangeeta_Sengar.jpg',
      credentials: "MBBS, MS (ENT)",
      specialty: "Senior ENT Specialist (Otolaryngologist)",
      experience: "12+ Years Experience",
      education: [
        "MBBS – GSVM Medical College, Kanpur",
        "MS (ENT) – GSVM Medical College, Kanpur",
        "Advanced Training in Neuro-Otology – SGPGI, Lucknow",
        "Specialized in Sialendoscopy – IMMAST, Mumbai"
      ],
      expertise: [
        "Neuro-Otology (Inner Ear & Balance Disorders)",
        "Sialendoscopy (Minimally Invasive Salivary Gland Treatment)",
        "Diagnosis & Treatment of Ear, Nose & Throat Conditions",
        "Pediatric ENT Care"
      ],
      description: "Dr. Sangeeta Sengar is a highly respected ENT specialist, with rich experience from SGPGI Lucknow and ESI Hospital, New Delhi. Known for her empathetic care and clinical expertise, she has become a beacon of trust for patients dealing with ENT disorders.",
      availability: "Mon-Sat: 10:00 AM - 5:00 PM",
      consultationFee: "₹700"
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Medical Specialists</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our founding doctors and lead specialists who bring years of experience 
            and expertise to provide you with the best possible care.
          </p>
        </div>

        <div className="space-y-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-slide-up">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Doctor Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-medical-100 rounded-xl flex-shrink-0">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={200}
                        height={200}
                        className="rounded-2xl shadow-xl  object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                      <p className="text-medical-600 font-semibold text-lg mb-1">{doctor.credentials}</p>
                      <p className="text-gray-700 font-medium text-lg">{doctor.specialty}</p>
                      <div className="flex items-center mt-2">
                        <Award className="w-4 h-4 text-green-600 mr-2" />
                        <span className="text-green-600 font-medium">{doctor.experience}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{doctor.description}</p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                      <div className="flex items-center mb-4">
                        <GraduationCap className="w-5 h-5 text-medical-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Education & Training</h4>
                      </div>
                      <ul className="space-y-3">
                        {doctor.education.map((edu, eduIndex) => (
                          <li key={eduIndex} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Clinical Expertise */}
                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-medical-600 mr-2" />
                        <h4 className="font-bold text-gray-900 text-lg">Clinical Expertise</h4>
                      </div>
                      <ul className="space-y-3">
                        {doctor.expertise.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start text-gray-600">
                            <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Appointment Info */}
                <div className="bg-gradient-to-br from-medical-50 to-accent-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 text-lg mb-6">Appointment Information</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-medical-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Availability</p>
                        <p className="text-gray-600 text-sm">{doctor.availability}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-medical-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600 text-sm">Medi Help Hospital, Sarvodaya Nagar</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-medical-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Consultation Fee</p>
                        <p className="text-gray-600 text-sm">{doctor.consultationFee}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link 
                      href="/contact"
                      className="w-full bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 text-center block"
                    >
                      Book Appointment
                    </Link>
                    <a 
                      href="tel:+919839800199"
                      className="w-full bg-white hover:bg-gray-50 text-medical-600 font-semibold py-3 px-4 rounded-lg border-2 border-medical-600 transition-colors duration-300 text-center block"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllDoctorsSection