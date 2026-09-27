'use client'

import { Zap, Monitor, Cpu, Wifi, Shield, Database } from 'lucide-react'

const TechnologySection = () => {
  const technologies = [
    {
      icon: Monitor,
      title: "Advanced Imaging Systems",
      description: "Latest MRI, CT scan, and digital X-ray equipment for precise diagnosis",
      features: ["High-resolution imaging", "3D reconstruction", "Fast scan times", "Minimal radiation"]
    },
    {
      icon: Cpu,
      title: "Digital Health Records",
      description: "Comprehensive electronic medical records system for efficient patient management",
      features: ["Secure data storage", "Real-time access", "Integration capabilities", "Backup systems"]
    },
    {
      icon: Zap,
      title: "Surgical Technology",
      description: "State-of-the-art surgical equipment including endoscopic and minimally invasive tools",
      features: ["HD visualization", "Precision instruments", "Robotic assistance", "Real-time monitoring"]
    },
    {
      icon: Database,
      title: "Laboratory Automation",
      description: "Automated laboratory systems for rapid and accurate test results",
      features: ["Automated analysis", "Quality control", "Rapid turnaround", "Error reduction"]
    },
    {
      icon: Wifi,
      title: "Telemedicine Platform",
      description: "Advanced telecommunication systems for remote consultations and monitoring",
      features: ["HD video calls", "Secure connections", "Mobile compatibility", "Record integration"]
    },
    {
      icon: Shield,
      title: "Safety & Monitoring",
      description: "Comprehensive patient monitoring and safety systems throughout the hospital",
      features: ["Continuous monitoring", "Alert systems", "Safety protocols", "Emergency response"]
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cutting-Edge <span className="text-gradient">Medical Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We invest in the latest medical technology to ensure our patients receive 
            the most advanced and effective treatments available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 card-hover animate-slide-up">
              <div className="flex items-start space-x-4">
                <div className="bg-medical-100 p-4 rounded-xl flex-shrink-0">
                  <tech.icon className="w-8 h-8 text-medical-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {tech.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-medical-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="bg-medical-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Technology by Numbers</h3>
            <p className="text-blue-100 text-lg">Our commitment to technological advancement</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
              <p className="text-blue-100">Digital Records</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">24/7</div>
              <p className="text-blue-100">System Monitoring</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
              <p className="text-blue-100">System Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">Latest</div>
              <p className="text-blue-100">Equipment Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnologySection