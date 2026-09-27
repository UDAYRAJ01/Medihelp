'use client'
import React, { useState, useEffect } from 'react'
import { Phone, Calendar, MapPin, Clock, LogIn  } from 'lucide-react'


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "/images/gallery/hospital.jpg",  
      alt: "Modern Medihelp office"
    },
    {
      src: "/images/gallery/6.jpg",
      alt: "Medihelp treatment room"
    },
    {
      src: "/images/gallery/7.jpg",
      alt: "Medihelp equipment"
    },
    {
      src: "/images/gallery/8.jpg",
      alt: "Medihelp consultation"
    },
    {
      src: "/images/gallery/9.jpg",
      alt: "Medihelp consultation"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative  section-padding gradient-bg text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-60 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 mt-2 items-center">
          {/* Content */}
          <div className="animate-slide-up  order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Excellence in 
              <span className="block text-yellow-300">Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              World-class medical care with compassion, innovation, and patient-centric values in the heart of Kanpur.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://themedihelp.dmaarogya.com/aarogiPlus/" className="btn-primary bg-white text-medical-600 hover:bg-gray-100">
                <Calendar className="w-5 h-5 inline mr-2" />
                Login / Book Appointment
              </a>
              <a href="tel:+919839800199" className="btn-secondary border-white  hover:bg-white hover:text-medical-600">
                <Phone className="w-5 h-5 inline mr-2" />
                Emergency Call
              </a> 
            </div>

            {/* Quick Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <Clock className="w-6 h-6 text-yellow-300" />
                <div>
                  <p className="font-semibold">24/7 Emergency</p>
                  <p className="text-sm text-blue-100">Always Available</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-yellow-300" />
                <div>
                  <p className="font-semibold">Sarvodaya Nagar</p>
                  <p className="text-sm text-blue-100">Kanpur, UP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Illustration/Stats */}
          <div className="animate-slide-up lg:justify-self-end  order-1 md:order-2"> 
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  ))}
                </div>
 
                 
              </div> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection