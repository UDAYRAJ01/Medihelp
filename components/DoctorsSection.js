'use client'

import { Award, GraduationCap, Stethoscope } from 'lucide-react'

const DoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Vikas Sengar",
      credentials: "MBBS, MD (Medicine), DM (Gastroenterology)",
      specialty: "Consultant Gastroenterologist & Hepatologist",
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
      description: "Dr. Vikas Sengar is a distinguished name in the field of Gastroenterology and Digestive Health. With advanced training from SGPGI Lucknow and extensive experience in treating complex gastrointestinal disorders, he is known for his precision, compassion, and patient-first approach."
    },
    {
      name: "Dr. Sangeeta Sengar",
      credentials: "MBBS, MS (ENT)",
      specialty: "Senior ENT Specialist (Otolaryngologist)",
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
      description: "Dr. Sangeeta Sengar is a highly respected ENT specialist, with rich experience from SGPGI Lucknow and ESI Hospital, New Delhi. Known for her empathetic care and clinical expertise, she has become a beacon of trust for patients dealing with ENT disorders."
    }
  ]

  return (
    <section id="doctors" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Leading Specialists</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hospital is founded and led by experienced medical professionals dedicated to providing exceptional healthcare.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 card-hover animate-slide-up">
              {/* Doctor Header */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-medical-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-12 h-12 text-medical-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-medical-600 font-semibold mb-1">{doctor.credentials}</p>
                <p className="text-gray-600 font-medium">{doctor.specialty}</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{doctor.description}</p>

              {/* Education */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <GraduationCap className="w-5 h-5 text-medical-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Education & Training</h4>
                </div>
                <ul className="space-y-2">
                  {doctor.education.map((edu, eduIndex) => (
                    <li key={eduIndex} className="text-gray-600 flex items-start">
                      <div className="w-2 h-2 bg-medical-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Expertise */}
              <div>
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-medical-600 mr-2" />
                  <h4 className="font-bold text-gray-900">Clinical Expertise</h4>
                </div>
                <ul className="space-y-2">
                  {doctor.expertise.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-600 flex items-start">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection