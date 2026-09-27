'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const faqs = [
    {
      question: "What are the hospital's visiting hours?",
      answer: "Our regular visiting hours are 10:00 AM – 12:00 PM and 5:00 PM – 7:00 PM. Visiting policies may vary depending on the patient's condition and the department. For ICU and critical care areas, restricted visiting hours apply. Please check with the nurse station for specific details."
    },
    {
      question: "Do I need to make an appointment to see a doctor?",
      answer: "Yes, we recommend making an appointment in advance to minimize waiting time and ensure the availability of your preferred specialist. However, our emergency department is open 24/7 for urgent medical care without prior appointment. You can book appointments by calling us or through our online booking system."
    },
    {
      question: "Does the hospital accept health insurance?",
      answer: "Yes, Medi Help Hospital accepts a wide range of health insurance policies and TPAs (Third Party Administrators). Our billing department will assist you with insurance-related queries and cashless hospitalization facilities. Please bring your insurance card and related documents at the time of admission."
    },
    {
      question: "What safety measures are in place to protect against COVID-19?",
      answer: "We strictly follow all COVID-19 safety protocols including: regular sanitization of hospital premises, temperature checks at entry points, mandatory masks for staff, patients, and visitors, social distancing in waiting areas, and separate isolation wards for suspected or confirmed cases."
    },
    {
      question: "Are telemedicine consultations available?",
      answer: "Yes, we provide online consultations via video call or phone for patients who cannot visit the hospital in person. You can book telemedicine appointments through our reception desk or hospital website. This service is particularly helpful for follow-up consultations and non-emergency medical advice."
    },
    {
      question: "What languages are spoken by hospital staff?",
      answer: "Our doctors and staff are fluent in Hindi, English, and regional languages, ensuring smooth communication and patient comfort. We prioritize clear communication to help patients understand their treatment plans and feel comfortable during their stay."
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, policies, and procedures to help you better understand what we offer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg card-hover animate-slide-up">
                <button
                  className="w-full text-left p-6 flex items-start justify-between focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                >
                  <div className="flex items-start space-x-3 flex-1">
                    <HelpCircle className="w-5 h-5 text-medical-600 mt-0.5 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-medical-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-medical-600" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-8 pr-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-16 bg-medical-600 text-white rounded-2xl p-8 md:p-12 text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Our friendly staff is here to help. Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919839800199" className="btn-primary bg-white text-medical-600 hover:bg-gray-100">
                Call Us Now
              </a>
              <a href="#contact" className="btn-secondary border-white text-white hover:bg-white hover:text-medical-600">
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection