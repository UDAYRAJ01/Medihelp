import HeroSection from '@/components/HeroSection'
import HomeAboutSection from '@/components/HomeAboutSection'
import FeaturedDoctorsSection from '@/components/FeaturedDoctorsSection'
import FeaturedServicesSection from '@/components/FeaturedServicesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import LatestBlogSection from '@/components/blog/LatestBlogSection'
import CTASection from '@/components/CTASection'
import SpecialtiesSection from '@/components/SpecialtiesSection'
import Slider from '@/components/Slider'

export const metadata = {
  title: 'Best Hospital in Kanpur | Top Gastro & ENT Hospital - Medi Help Hospital',
  description: 'Medi Help Hospital in Sarvodaya Nagar, Kanpur is the leading healthcare center for Gastroenterology (Dr. Vikas Sengar - DM SGPGI), ENT & Head-Neck Surgery (Dr. Sangeeta Sengar - MS ENT), and 24/7 Emergency & ICU care.',
  keywords: 'best hospital in kanpur, top gastro doctor kanpur, best ent specialist kanpur, gastroenterologist in kanpur, ent doctor kanpur, hospital in sarvodaya nagar, emergency hospital kanpur, liver specialist kanpur, sinus surgery kanpur, Medi Help Hospital Kanpur',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Medi Help Hospital Kanpur | Best Gastro, ENT & Multi-Specialty Hospital',
    description: 'Leading multi-specialty hospital in Kanpur featuring Dr. Vikas Sengar (Gastroenterology) and Dr. Sangeeta Sengar (ENT) with 24/7 emergency care.',
    url: 'https://themedihelp.com',
  },
}


  const slides = [
    {
      image: '/images/gallery/1.jpg', 
    },
    {
      image: '/images/gallery/2.jpg', 
    } ,
    {
      image: '/images/gallery/3.jpg', 
    } ,
    {
      image: '/images/gallery/4.jpg', 
    } ,
    {
      image: '/images/gallery/5.jpg', 
    } ,
    {
      image: '/images/gallery/6.jpg', 
    } ,
    {
      image: '/images/gallery/7.jpg', 
    } ,
    {
      image: '/images/gallery/8.jpg', 
    } ,
    {
      image: '/images/gallery/9.jpg', 
    } ,
    {
      image: '/images/gallery/10.jpg', 
    } ,
    {
      image: '/images/gallery/11.jpg', 
    } ,
    {
      image: '/images/gallery/12.jpg', 
    }  ,
    {
      image: '/images/gallery/13.jpg', 
    }  ,
    {
      image: '/images/gallery/14.jpg', 
    }  ,
    {
      image: '/images/gallery/15.jpg', 
    }  ,
    {
      image: '/images/gallery/16.jpg', 
    } 
  ]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <SpecialtiesSection />
      <HomeAboutSection />
      <section className=" bg-white">
        <div className="container-custom">

       <Slider
      slides={slides}
      autoPlay={true}
      variant="card"
      showNavigation={true}
      showPagination={true}
    /></div>
    </section>
      <FeaturedDoctorsSection />
      <FeaturedServicesSection />
      <WhyChooseUsSection />

      <TestimonialsSection />
      <LatestBlogSection />
      <CTASection />
    </div>
  )
}