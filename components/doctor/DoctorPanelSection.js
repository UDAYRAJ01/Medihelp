'use client'

import { Stethoscope, Clock, Calendar } from 'lucide-react'

const SimpleDoctorGrid = () => {
  const doctorsBySpecialty = [
    {
      specialty: "Anesthesiology & Pain Management (Critical Care Unit)",
      doctors: [
        {
          name: "Dr. Saurabh Singh",
          credentials: "MBBS, MD",
          timing: "9:00 AM – 11:00 AM",
          days: "Daily"
        },
        {
          name: "Dr. Mandi Upadhyay",
          credentials: "MBBS, MD",
          timing: "8:00 PM – 9:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "ENT",
      doctors: [
        {
          name: "Dr. Sangeeta Sengar",
          credentials: "MBBS, MS",
          timing: "12:00 PM – 5:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Gastroenterology",
      doctors: [
        {
          name: "Dr. Vikas Sengar",
          credentials: "MBBS, DM",
          timing: "12:00 PM – 5:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Gastro-Surgery",
      doctors: [
        {
          name: "Dr. Brijendra Singh",
          credentials: "MBBS, MS, MCH",
          timing: "1:00 PM – 2:00 PM",
          days: "Mon, Wed, Fri"
        }
      ]
    },
    {
      specialty: "General Surgery",
      doctors: [
        {
          name: "Dr. Raghav Pandey",
          credentials: "MBBS, MS",
          timing: "11:00 AM – 1:00 PM",
          days: "Daily"
        },
        {
          name: "Dr. Dinesh Singh",
          credentials: "MBBS, MS",
          timing: "2:00 PM – 3:00 PM",
          days: "Tue, Thu, Sat"
        }
      ]
    },
    {
      specialty: "Medicine (ICU)",
      doctors: [
        {
          name: "Dr. Soni Vyas",
          credentials: "MBBS, MD",
          timing: "8:00 AM – 9:00 AM & 2:00 PM – 3:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Nephrology",
      doctors: [
        {
          name: "Dr. Yuraj Gulati",
          credentials: "MBBS, DM",
          timing: "2:00 PM – 3:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Neurology",
      doctors: [
        {
          name: "Dr. Varsha Ambwani",
          credentials: "MBBS, DM",
          timing: "5:00 PM – 7:00 PM",
          days: "Mon, Wed, Fri"
        },
        {
          name: "Dr. Sanjeev Jetali",
          credentials: "MBBS, DM",
          timing: "5:00 PM – 7:00 PM",
          days: "Tue, Thu, Sat"
        }
      ]
    },
    {
      specialty: "Orthopedics",
      doctors: [
        {
          name: "Dr. Manav Luthra",
          credentials: "MBBS, MS",
          timing: "1:00 PM – 2:00 PM",
          days: "Mon, Wed, Fri"
        },
        {
          name: "Dr. Goutam Dutta",
          credentials: "MBBS, MS",
          timing: "1:00 PM – 3:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Pediatrics",
      doctors: [
        {
          name: "Dr. Saurabh Singh",
          credentials: "MBBS, MD",
          timing: "5:00 PM – 7:00 PM",
          days: "Daily"
        },
        {
          name: "Dr. Shiny Sethi",
          credentials: "MBBS, MD",
          timing: "2:00 PM – 3:00 PM",
          days: "Tue, Thu, Sat"
        }
      ]
    },
    {
      specialty: "Psychiatry",
      doctors: [
        {
          name: "Dr. Priyanka Singh",
          credentials: "MBBS, MD",
          timing: "1:00 PM – 2:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Pulmonology",
      doctors: [
        {
          name: "Dr. Anurag Shukla",
          credentials: "MBBS, MD",
          timing: "11:00 AM – 12:00 PM",
          days: "Mon, Wed, Fri"
        },
        {
          name: "Dr. Arvind Kumar Verma",
          credentials: "MBBS, MD",
          timing: "1:00 PM – 2:00 PM",
          days: "Tue, Thu, Sat"
        }
      ]
    },
    {
      specialty: "Urology",
      doctors: [
        {
          name: "Dr. Saurabh Singh",
          credentials: "MBBS, MS, MCH",
          timing: "2:00 PM – 3:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Gynecology",
      doctors: [
        {
          name: "Dr. Alpana Rajput",
          credentials: "MBBS, MS",
          timing: "9:00 AM – 10:00 AM & 5:00 PM – 6:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Ophthalmology",
      doctors: [
        {
          name: "Dr. Neha Dixit",
          credentials: "MBBS, MS",
          timing: "9:00 AM – 10:00 AM & 6:00 PM – 7:00 PM",
          days: "Daily"
        }
      ]
    },
    {
      specialty: "Cardiology",
      doctors: [
        {
          name: "Dr. Neeraj Variyani",
          credentials: "MBBS, MD",
          timing: "1:00 PM – 2:00 PM",
          days: "Mon, Wed, Fri"
        },
        {
          name: "Dr. Rajeev Gupta",
          credentials: "MBBS, DNB, DM",
          timing: "5:00 PM – 6:00 PM",
          days: "Tue, Thu, Sat"
        }
      ]
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom"> 

        {/* Doctor Specialties */}
        <div className="space-y-12">
          {doctorsBySpecialty.map((specialtyGroup, groupIndex) => (
            <div key={groupIndex} className="animate-slide-up">
              {/* Specialty Header */}
              <div className="bg-medical-600 rounded-t-xl py-2 px-4 mb-0">
                <h3 className="text-xl font-bold text-white">{specialtyGroup.specialty}</h3>
              </div>

              {/* Doctors Grid */}
              <div className="bg-white border border-gray-200 rounded-b-xl p-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {specialtyGroup.doctors.map((doctor, doctorIndex) => (
                    <div key={doctorIndex} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                      <div className="flex items-start space-x-4">
                        <div className="bg-medical-100 p-3 rounded-lg flex-shrink-0">
                          <Stethoscope className="w-6 h-6 text-medical-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-1">{doctor.name}</h4>
                          <p className="text-medical-600 font-semibold mb-3">{doctor.credentials}</p>
                          
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-700">
                              <Clock className="w-4 h-4 text-medical-600 mr-2 flex-shrink-0" />
                              <span className="text-sm font-medium">{doctor.timing}</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                              <Calendar className="w-4 h-4 text-medical-600 mr-2 flex-shrink-0" />
                              <span className="text-sm">{doctor.days}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-medical-50 border border-medical-200 rounded-xl p-8 text-center">
          <h4 className="font-bold text-medical-800 mb-4">For Appointments & Inquiries</h4>
          <p className="text-medical-700 mb-6">
            Contact our hospital for doctor appointments and medical consultations.
          </p>
          <a 
            href="tel:+919839800199"
            className="bg-medical-600 hover:bg-medical-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Call: +91 98398 00199
          </a>
        </div>
      </div>
    </section>
  )
}

export default SimpleDoctorGrid