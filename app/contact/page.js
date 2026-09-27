import ContactHeroSection from '@/components/contact/ContactHeroSection'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactInfoSection from '@/components/contact/ContactInfoSection'
import LocationMapSection from '@/components/contact/LocationMapSection'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title: 'Contact & Book Appointment | Medi Help Hospital Sarvodaya Nagar Kanpur',
  description: 'Contact Medi Help Hospital at K-117, 22, Sarvodaya Nagar, Kanpur. Call +91 98398 00199 for OPD doctor consultation with Dr. Vikas Sengar and Dr. Sangeeta Sengar, or 24/7 emergency care.',
  keywords: 'contact Medi Help Hospital, book appointment Kanpur doctor, hospital contact number Kanpur, hospital in Sarvodaya Nagar Kanpur, Dr Vikas Sengar appointment, Dr Sangeeta Sengar appointment, emergency ambulance Kanpur',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Book Appointment | Medi Help Hospital Kanpur',
    description: 'Reach Medi Help Hospital in Sarvodaya Nagar, Kanpur for appointments and 24/7 emergency medical assistance.',
    url: 'https://themedihelp.com/contact',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://themedihelp.com/contact#webpage",
        "url": "https://themedihelp.com/contact",
        "name": "Contact & Book Appointment | Medi Help Hospital Kanpur",
        "description": "Contact information, hospital address, consultation booking, and emergency numbers for Medi Help Hospital Kanpur.",
        "breadcrumb": {
          "@id": "https://themedihelp.com/contact#breadcrumb"
        }
      },
      {
        "@type": "Hospital",
        "@id": "https://themedihelp.com/#hospital",
        "name": "Medi Help Hospital",
        "telephone": "+91 98398 00199",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "K-117, 22, Sarvodaya Nagar",
          "addressLocality": "Kanpur",
          "postalCode": "208005",
          "addressRegion": "Uttar Pradesh",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.476442,
          "longitude": 80.306915
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/contact#breadcrumb",
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
            "name": "Contact",
            "item": "https://themedihelp.com/contact"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <LocationMapSection />
      <FAQSection />
    </div>
  )
}