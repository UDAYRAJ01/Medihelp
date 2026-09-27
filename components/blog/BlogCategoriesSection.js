'use client'

import Link from 'next/link'
import { Activity, Stethoscope, Heart, Baby, Brain, Users, ArrowRight } from 'lucide-react'

const BlogCategoriesSection = () => {
  const categories = [
    {
      icon: Activity,
      name: "Gastroenterology",
      count: 12,
      description: "Digestive health tips and gastrointestinal care advice",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Stethoscope,
      name: "ENT Care",
      count: 8,
      description: "Ear, nose, and throat health information",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Heart,
      name: "Emergency Care",
      count: 6,
      description: "Emergency preparedness and first aid guidance",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Heart,
      name: "Cardiology",
      count: 10,
      description: "Heart health and cardiovascular wellness",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Baby,
      name: "Pediatrics",
      count: 14,
      description: "Children's health and parenting tips",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Users,
      name: "General Health",
      count: 18,
      description: "Overall wellness and preventive care",
      color: "bg-gray-100 text-gray-600"
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find health articles organized by medical specialty and health topics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
              className="bg-white rounded-xl p-6 shadow-md card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-medical-600 transition-colors">
                      {category.name}
                    </h3> 
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center text-medical-600 text-sm font-medium group-hover:text-medical-700">
                    View Articles
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogCategoriesSection