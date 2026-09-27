import AboutHeroSection from '@/components/about/AboutHeroSection'
import AboutStorySection from '@/components/about/AboutStorySection'
import MissionVisionSection from '@/components/MissionVisionSection'
import ValuesSection from '@/components/ValuesSection'
import AchievementsSection from '@/components/about/AchievementsSection'
import CTASection from '@/components/CTASection'

export const metadata = {
  title: 'About Medi Help Hospital Kanpur | Trusted Medical Care Since 2019',
  description: 'Discover the story behind Medi Help Hospital Kanpur. Founded by Dr. Vikas Sengar (Gastroenterologist, SGPGI) and Dr. Sangeeta Sengar (ENT Specialist, GSVM), delivering trusted medical care in Uttar Pradesh.',
  keywords: 'about Medi Help Hospital, best hospital in Kanpur, healthcare history Kanpur, Dr Vikas Sengar gastro Kanpur, Dr Sangeeta Sengar ENT Kanpur, medical center Sarvodaya Nagar Kanpur',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Medi Help Hospital Kanpur | Excellence in Healthcare',
    description: 'Learn about Medi Help Hospital, founded by Dr. Vikas Sengar and Dr. Sangeeta Sengar to bring world-class healthcare to Kanpur.',
    url: 'https://themedihelp.com/about',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://themedihelp.com/about#webpage",
        "url": "https://themedihelp.com/about",
        "name": "About Medi Help Hospital Kanpur",
        "description": "About Medi Help Hospital, its founders Dr. Vikas Sengar and Dr. Sangeeta Sengar, vision, mission, and medical excellence.",
        "breadcrumb": {
          "@id": "https://themedihelp.com/about#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/about#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://themedihelp.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About Us",
            "item": "https://themedihelp.com/about"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutHeroSection />
      <AboutStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <AchievementsSection />
      <CTASection />
    </div>
  )
}