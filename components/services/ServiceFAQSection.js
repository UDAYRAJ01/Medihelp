'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const ServiceFAQSection = ({ serviceSlug }) => {
  const [openFAQ, setOpenFAQ] = useState(0)

  const serviceFAQs = {
    'gastroenterology': [
      {
        question: "What should I expect during an endoscopy procedure?",
        answer: "During an endoscopy, a thin, flexible tube with a camera is gently inserted through your mouth to examine your digestive tract. The procedure typically takes 15-30 minutes and is performed under mild sedation for your comfort. You'll need to fast for 8-12 hours beforehand."
      },
      {
        question: "How should I prepare for a colonoscopy?",
        answer: "Preparation involves following a clear liquid diet for 24 hours before the procedure and taking prescribed bowel preparation medication. Our team will provide detailed instructions. It's important to follow the prep instructions carefully for the best results."
      },
      {
        question: "Is ERCP procedure safe?",
        answer: "ERCP is generally safe when performed by experienced specialists like Dr. Vikas Sengar. While there are some risks as with any medical procedure, the benefits typically outweigh the risks for patients who need this specialized treatment. We'll discuss all risks and benefits with you beforehand."
      },
      {
        question: "When should I see a gastroenterologist?",
        answer: "You should consult a gastroenterologist for persistent symptoms like chronic abdominal pain, changes in bowel habits, difficulty swallowing, heartburn, or if you have a family history of digestive disorders. Early consultation can help prevent complications."
      },
      {
        question: "What digestive conditions do you treat?",
        answer: "We treat a wide range of conditions including GERD, IBD, IBS, liver diseases, pancreatic disorders, gallbladder problems, and perform cancer screenings. Dr. Vikas Sengar specializes in complex gastrointestinal conditions."
      }
    ],
    'ent': [
      {
        question: "What is sialendoscopy and when is it needed?",
        answer: "Sialendoscopy is a minimally invasive procedure to treat salivary gland stones and other blockages. It involves inserting a tiny endoscope into the salivary gland duct. Dr. Sangeeta Sengar is specially trained in this advanced technique, which offers faster recovery than traditional surgery."
      },
      {
        question: "How is hearing loss diagnosed and treated?",
        answer: "Hearing loss diagnosis involves comprehensive hearing tests, physical examination, and sometimes imaging studies. Treatment depends on the type and cause - it may include hearing aids, medications, surgery, or other interventions. We provide complete hearing evaluations."
      },
      {
        question: "What should I expect during neuro-otology treatment?",
        answer: "Neuro-otology focuses on inner ear and balance disorders. Evaluation may include balance testing, hearing assessments, and specialized examinations. Treatment can involve medications, vestibular rehabilitation, or surgical procedures depending on your specific condition."
      },
      {
        question: "When should I bring my child to see an ENT specialist?",
        answer: "Consider pediatric ENT consultation for recurrent ear infections, hearing concerns, persistent nasal congestion, sleep problems, or speech delays. Early intervention can prevent complications and support proper development."
      },
      {
        question: "What ear, nose, and throat conditions do you treat?",
        answer: "We treat conditions including hearing loss, tinnitus, sinus problems, throat infections, voice disorders, sleep apnea, and balance issues. Our expertise includes both medical management and surgical interventions when needed."
      }
    ],
    'emergency-care': [
      {
        question: "When should I visit the emergency department?",
        answer: "Visit our emergency department for life-threatening conditions like chest pain, difficulty breathing, severe injuries, loss of consciousness, severe allergic reactions, or any condition requiring immediate medical attention. We're available 24/7."
      },
      {
        question: "What should I bring to the emergency department?",
        answer: "Bring valid ID, insurance cards, list of current medications, medical history, and any relevant medical records. If possible, have someone accompany you. Don't delay treatment to gather documents in true emergencies."
      },
      {
        question: "How quickly will I be seen in the emergency department?",
        answer: "Patients are triaged based on severity of condition, not arrival time. Life-threatening cases are seen immediately, while less urgent cases may have to wait. Our goal is to provide timely, appropriate care for all patients."
      },
      {
        question: "Do you accept insurance for emergency services?",
        answer: "Yes, we accept most insurance plans for emergency services. Our billing department will work with your insurance company. Don't let insurance concerns delay seeking emergency care - stabilizing treatment is provided regardless of insurance status."
      },
      {
        question: "What emergency services are available 24/7?",
        answer: "Our 24/7 services include emergency medicine, critical care, trauma management, cardiac care, laboratory services, imaging studies, pharmacy services, and access to specialist consultations when needed."
      }
    ]
  }

  const faqs = serviceFAQs[serviceSlug] || serviceFAQs['gastroenterology']

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about our services and procedures. Can't find what you're looking for? 
            Contact us directly for personalized answers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md card-hover animate-slide-up">
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

          {/* Contact for More Questions */}
          <div className="bg-medical-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 text-lg mb-6">
              Our medical team is here to provide personalized answers and guidance for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-medical-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Ask a Question
              </a>
              <a 
                href="tel:+919839800199"
                className="border-2 border-white text-white hover:bg-white hover:text-medical-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call +91 98398 00199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceFAQSection