'use client'
import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs, Grid } from 'swiper/modules'
import { motion } from 'framer-motion' 
import { ChevronLeft, ChevronRight, Play, Pause, Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/thumbs'
import 'swiper/css/grid'

const Slider = ({
  slides = [],
  variant = 'default', // 'default', 'card', 'hero', 'testimonial', 'grid', 'thumbs'
  autoPlay = true,
  autoPlayDelay = 5000,
  pauseOnHover = true,
  showNavigation = true,
  showPagination = true,
  showPlayPause = false,
  loop = true,
  effect = 'slide', // 'slide', 'fade', 'cube', 'coverflow', 'flip'
  spaceBetween = 30,
  speed = 600,
  centeredSlides = false,
  className = '',
  height = 'h-96',
  
  // Responsive breakpoints - customize slides per view
  responsive = {
    // Mobile first approach
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 4, spaceBetween: 30 },
    1536: { slidesPerView: 5, spaceBetween: 40 }
  },
  
  // Grid settings (for grid variant)
  gridRows = 2,
  gridFill = 'row',
  
  // Custom navigation
  customNavigation = false,
  navigationPrevClass = 'swiper-button-prev-custom',
  navigationNextClass = 'swiper-button-next-custom',
  
  // Callbacks
  onSlideChange = null,
  onSwiper = null,
}) => {

  const swiperRef = useRef(null)

  // Default responsive settings for different variants
  const getVariantResponsive = (variant) => {
    switch (variant) {
      case 'hero':
        return {
          320: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 }
        }
      case 'card':
        return {
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1280: { slidesPerView: 4, spaceBetween: 30 }
        }
      case 'testimonial':
        return {
          320: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 30 },
          1280: { slidesPerView: 3, spaceBetween: 40 }
        }
      case 'grid':
        return {
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 25 }
        }
      default:
        return responsive
    }
  }

  const finalResponsive = getVariantResponsive(variant)

  // Swiper modules
  const swiperModules = [Navigation, Pagination, Autoplay]
  if (effect === 'fade') swiperModules.push(EffectFade)
  if (variant === 'grid') swiperModules.push(Grid)
  if (variant === 'thumbs') swiperModules.push(Thumbs)

  if (!slides.length) return null

  // Hero Slider Variant
  if (variant === 'hero') {
    return (
      <div className={`relative ${height} ${className} overflow-hidden rounded-lg`}>
        <Swiper
          modules={swiperModules}
          spaceBetween={0}
          slidesPerView={1}
          loop={loop}
          speed={speed}
          effect={effect}
          autoplay={autoPlay ? {
            delay: autoPlayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: pauseOnHover
          } : false}
          navigation={showNavigation ? {
            prevEl: `.${navigationPrevClass}`,
            nextEl: `.${navigationNextClass}`
          } : false}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true
          } : false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center px-8 lg:px-16">
                  <motion.div 
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl text-white"
                  >
                    {slide.title && (
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6">
                        {slide.title}
                      </h1>
                    )}
                    {slide.description && (
                      <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                        {slide.description}
                      </p>
                    )}
                    {slide.buttonText && slide.buttonLink && (
                      <a
                        href={slide.buttonLink}
                        className="bg-accent hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block text-lg transform hover:scale-105"
                      >
                        {slide.buttonText}
                      </a>
                    )}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        {showNavigation && (
          <>
            <button 
              className={`${navigationPrevClass} absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              className={`${navigationNextClass} absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm`}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>
    )
  }

  // Card Slider Variant
  if (variant === 'card') {
    return (
      <div className={`${className} relative`}>
        <Swiper
          modules={swiperModules}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          breakpoints={finalResponsive}
          loop={loop && slides.length > 3}
          speed={speed}
          centeredSlides={centeredSlides}
          autoplay={autoPlay ? {
            delay: autoPlayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: pauseOnHover
          } : false}
          navigation={showNavigation ? {
            prevEl: `.${navigationPrevClass}`,
            nextEl: `.${navigationNextClass}`
          } : false}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true
          } : false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          className="pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl card-shadow hover:shadow-xl transition-all duration-300 group overflow-hidden h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title || 'Slide image'}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {slide.badge && (
                    <span className="absolute top-4 left-4 bg-accent-500 opacity-75 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {slide.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {slide.category && (
                      <span className="text-primary text-sm font-medium uppercase tracking-wide">
                        {slide.category}
                      </span>
                    )}
                    {slide.title && (
                      <h3 className="text-xl font-bold text-textColor mb-3 group-hover:text-primary transition-colors duration-300">
                        {slide.title}
                      </h3>
                    )}
                    {slide.description && (
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                        {slide.description}
                      </p>
                    )}
                  </div>
                  {slide.buttonText && slide.buttonLink && (
                    <a
                      href={slide.buttonLink}
                      className="text-primary font-semibold hover:text-blue-700 transition-colors duration-200 group inline-flex items-center"
                    >
                      {slide.buttonText}
                      <ChevronRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200" size={14} />
                    </a>
                  )}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation for Card Variant */}
        {showNavigation && (
          <div className="flex justify-center space-x-4 mt-6">
            <button 
              className={`${navigationPrevClass} bg-primary-700 text-white p-3 rounded-full hover:bg-primary-800 transition-colors duration-300 disabled:opacity-50`}
            >
              <ChevronLeft />
            </button>
            <button 
              className={`${navigationNextClass} bg-primary-700 text-white p-3 rounded-full hover:bg-primary-800 transition-colors duration-300 disabled:opacity-50`}
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    )
  }

  // Testimonial Slider Variant
  if (variant === 'testimonial') {
    return (
      <div className={`${className} relative`}>
        <Swiper
          modules={swiperModules}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          breakpoints={finalResponsive}
          loop={loop && slides.length > 2}
          speed={speed}
          centeredSlides={centeredSlides}
          autoplay={autoPlay ? {
            delay: autoPlayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: pauseOnHover
          } : false}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true
          } : false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          className="pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 card-shadow relative"
              >
                <div className="flex flex-col items-center text-center">
                  {slide.rating && (
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${i < slide.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          size={20}
                        />
                      ))}
                    </div>
                  )}
                  
                  {slide.description && (
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                      "{slide.description}"
                    </p>
                  )}
                  
                  <div className="flex items-center">
                    {slide.image && (
                      <img
                        src={slide.image}
                        alt={slide.title || 'Testimonial'}
                        className="w-16 h-16 rounded-full object-cover border-4 border-primary mr-4"
                      />
                    )}
                    <div className="text-left">
                      {slide.title && (
                        <h4 className="font-bold text-textColor text-lg">
                          {slide.title}
                        </h4>
                      )}
                      {slide.subtitle && (
                        <p className="text-primary font-medium">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Quote decoration */}
                <div className="absolute top-4 right-6 text-6xl text-primary opacity-10 font-serif">
                  "
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    )
  }

  // Grid Slider Variant
  if (variant === 'grid') {
    return (
      <div className={`${className} relative`}>
        <Swiper
          modules={swiperModules}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          breakpoints={finalResponsive}
          grid={{
            rows: gridRows,
            fill: gridFill
          }}
          speed={speed}
          autoplay={autoPlay ? {
            delay: autoPlayDelay,
            disableOnInteraction: false
          } : false}
          navigation={showNavigation ? {
            prevEl: `.${navigationPrevClass}`,
            nextEl: `.${navigationNextClass}`
          } : false}
          pagination={showPagination ? {
            clickable: true,
            dynamicBullets: true
          } : false}
          onSwiper={onSwiper}
          onSlideChange={onSlideChange}
          className="pb-12"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg card-shadow p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  {slide.image && (
                    <img
                      src={slide.image}
                      alt={slide.title || 'Grid item'}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                {slide.title && (
                  <h4 className="font-semibold text-textColor mb-2 text-center">
                    {slide.title}
                  </h4>
                )}
                {slide.price && (
                  <p className="text-primary font-bold text-center">
                    {slide.price}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Grid Navigation */}
        {showNavigation && (
          <div className="flex justify-center space-x-4 mt-6">
            <button className={`${navigationPrevClass} bg-primary-700 text-white p-2 rounded-full hover:bg-primary-800 transition-colors duration-300`}>
              <ChevronLeft />
            </button>
            <button className={`${navigationNextClass} bg-primary-700 text-white p-2 rounded-full hover:bg-primary-800 transition-colors duration-300`}>
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    )
  }

  // Default Slider Variant
  return (
    <div className={`${className} relative`}>
      <Swiper
        modules={swiperModules}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        breakpoints={finalResponsive}
        loop={loop}
        speed={speed}
        centeredSlides={centeredSlides}
        effect={effect}
        autoplay={autoPlay ? {
          delay: autoPlayDelay,
          disableOnInteraction: false,
          pauseOnMouseEnter: pauseOnHover
        } : false}
        navigation={showNavigation ? {
          prevEl: `.${navigationPrevClass}`,
          nextEl: `.${navigationNextClass}`
        } : false}
        pagination={showPagination ? {
          clickable: true,
          dynamicBullets: true
        } : false}
        onSwiper={onSwiper}
        onSlideChange={onSlideChange}
        className={`${height} pb-12`}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full bg-white rounded-lg card-shadow overflow-hidden">
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title || 'Slide'}
                  className="w-full h-full object-cover"
                />
              )}
              {(slide.title || slide.description) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  {slide.title && (
                    <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  )}
                  {slide.description && (
                    <p className="text-gray-200">{slide.description}</p>
                  )}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Default Navigation */}
      {showNavigation && (
        <>
          <button className={`${navigationPrevClass} absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-textColor p-3 rounded-full shadow-lg transition-all duration-300 z-10`}>
            <ChevronLeft />
          </button>
          <button className={`${navigationNextClass} absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-textColor p-3 rounded-full shadow-lg transition-all duration-300 z-10`}>
            <ChevronRight />
          </button>
        </>
      )}
    </div>
  )
}

export default Slider