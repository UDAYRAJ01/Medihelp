import FacilitiesHeroSection from '@/components/FacilitiesHeroSection'
import AllFacilitiesSection from '@/components/AllFacilitiesSection'
import TechnologySection from '@/components/TechnologySection'
import AmenitiesSection from '@/components/AmenitiesSection'
import VirtualTourSection from '@/components/VirtualTourSection'

export const metadata = {
  title: 'Hospital Facilities in Kanpur | Advanced ICU, OT & Endoscopy Suite',
  description: 'Explore state-of-the-art hospital facilities in Kanpur at Medi Help Hospital: Advanced Endoscopy Suite (ERCP/SpyGlass), Modular Operation Theaters, 24/7 ICU/HDU, and modern diagnostics.',
  keywords: 'hospital facilities Kanpur, best ICU in Kanpur, endoscopy suite Kanpur, modular operation theater Kanpur, emergency care Sarvodaya Nagar Kanpur, hospital amenities Kanpur',
  alternates: {
    canonical: '/facilities',
  },
  openGraph: {
    title: 'Hospital Facilities in Kanpur | Medi Help Hospital',
    description: 'State-of-the-art medical infrastructure and technology at Medi Help Hospital, Sarvodaya Nagar, Kanpur.',
    url: 'https://themedihelp.com/facilities',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function FacilitiesPage() {
  const facilitiesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://themedihelp.com/facilities#webpage",
        "url": "https://themedihelp.com/facilities",
        "name": "Hospital Facilities in Kanpur | Advanced ICU, OT & Endoscopy Suite",
        "description": "Explore state-of-the-art hospital facilities in Kanpur at Medi Help Hospital.",
        "breadcrumb": {
          "@id": "https://themedihelp.com/facilities#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/facilities#breadcrumb",
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
            "name": "Facilities",
            "item": "https://themedihelp.com/facilities"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facilitiesSchema) }}
      />
      <FacilitiesHeroSection />
      <AllFacilitiesSection />
      <TechnologySection />
      <AmenitiesSection />
      <VirtualTourSection />
    </div>
  )
}