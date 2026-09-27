import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import AllServicesSection from '@/components/services/AllServicesSection'
import EmergencyServicesSection from '@/components/services/EmergencyServicesSection'
import SpecializedServicesSection from '@/components/services/SpecializedServicesSection'
import ServiceProcessSection from '@/components/services/ServiceProcessSection'

export const metadata = {
  title: 'Multi-Specialty Medical Services in Kanpur | Medi Help Hospital',
  description: 'Explore comprehensive healthcare services in Kanpur: Advanced Gastroenterology & Endoscopy, ENT Surgeries & Sialendoscopy, 24/7 Emergency, ICU, and Inpatient Care at Medi Help Hospital.',
  keywords: 'medical services Kanpur, gastroenterology services Kanpur, best ENT clinic Kanpur, emergency hospital Kanpur, endoscopy colonoscopy Kanpur, ICU hospital Kanpur, Medi Help Hospital Sarvodaya Nagar',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Medical Services in Kanpur | Medi Help Hospital',
    description: 'Expert diagnostic, endoscopic, and surgical treatments in Kanpur with state-of-the-art facilities.',
    url: 'https://themedihelp.com/services',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://themedihelp.com/services#webpage",
        "url": "https://themedihelp.com/services",
        "name": "Multi-Specialty Medical Services in Kanpur | Medi Help Hospital",
        "description": "Comprehensive healthcare services in Kanpur: Gastroenterology, ENT, 24/7 Emergency, ICU, and Endoscopy.",
        "breadcrumb": {
          "@id": "https://themedihelp.com/services#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/services#breadcrumb",
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
            "name": "Services",
            "item": "https://themedihelp.com/services"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesHeroSection />
      <AllServicesSection />
      <EmergencyServicesSection />
      <SpecializedServicesSection />
      <ServiceProcessSection />
    </div>
  )
}