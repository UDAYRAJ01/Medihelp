import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://themedihelp.com'),
  title: {
    default: 'Medi Help Hospital | Best Multi-Specialty, Gastro & ENT Hospital in Kanpur',
    template: '%s | Medi Help Hospital Kanpur',
  },
  description: 'Medi Help Hospital in Sarvodaya Nagar, Kanpur is a leading multi-specialty healthcare center offering advanced Gastroenterology by Dr. Vikas Sengar (DM SGPGI), ENT Care by Dr. Sangeeta Sengar (MS ENT), and 24/7 Emergency Services in Uttar Pradesh.',
  keywords: [
    'hospital in Kanpur',
    'best hospital in Kanpur',
    'best gastroenterologist in Kanpur',
    'best ENT specialist in Kanpur',
    'Dr Vikas Sengar Kanpur',
    'Dr Sangeeta Sengar ENT',
    'emergency hospital in Kanpur',
    'hospital in Sarvodaya Nagar Kanpur',
    'liver specialist in Kanpur',
    'sinus surgery in Kanpur',
    'multi-specialty hospital Kanpur',
    'Medi Help Hospital Kanpur',
  ],
  authors: [{ name: 'Medi Help Hospital', url: 'https://themedihelp.com' }],
  creator: 'Medi Help Hospital',
  publisher: 'Medi Help Hospital',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Medi Help Hospital | Best Gastro, ENT & Multi-Specialty Hospital in Kanpur',
    description: 'Premier healthcare in Kanpur with super-specialist care in Gastroenterology (Dr. Vikas Sengar), ENT & Head-Neck Surgery (Dr. Sangeeta Sengar), and 24/7 Emergency & ICU care.',
    url: 'https://themedihelp.com',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/gallery/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Medi Help Hospital Kanpur - Modern Healthcare Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medi Help Hospital Kanpur | Best Gastro & ENT Hospital',
    description: 'Advanced medical treatments in Kanpur under Dr. Vikas Sengar (Gastro) & Dr. Sangeeta Sengar (ENT). 24/7 Emergency & ICU Care.',
    images: ['/images/gallery/1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Kanpur, Sarvodaya Nagar, Uttar Pradesh',
    'geo.position': '26.476442;80.306915',
    'ICBM': '26.476442, 80.306915',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0284c7',
}

export default function RootLayout({ children }) {
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Hospital", "MedicalClinic", "EmergencyService"],
        "@id": "https://themedihelp.com/#hospital",
        "name": "Medi Help Hospital",
        "alternateName": ["Medihelp Hospital Kanpur", "The Medi Help Hospital"],
        "url": "https://themedihelp.com",
        "logo": "https://themedihelp.com/images/medihelp-hospital-logo.png",
        "image": "https://themedihelp.com/images/gallery/1.jpg",
        "telephone": "+91 98398 00199",
        "emergencyTelephone": "+91 98398 00199",
        "priceRange": "$$",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking, Insurance TPA",
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
        },
        "areaServed": [
          { "@type": "City", "name": "Kanpur" },
          { "@type": "AdministrativeArea", "name": "Sarvodaya Nagar" },
          { "@type": "AdministrativeArea", "name": "Swaroop Nagar" },
          { "@type": "AdministrativeArea", "name": "Kakadeo" },
          { "@type": "AdministrativeArea", "name": "Kalyanpur" },
          { "@type": "AdministrativeArea", "name": "Civil Lines" },
          { "@type": "AdministrativeArea", "name": "Govind Nagar" },
          { "@type": "AdministrativeArea", "name": "Kidwai Nagar" },
          { "@type": "City", "name": "Unnao" },
          { "@type": "State", "name": "Uttar Pradesh" }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "medicalSpecialty": [
          "Gastroenterology",
          "Otolaryngology",
          "EmergencyMedicine",
          "Hepatology",
          "Endoscopy",
          "GeneralSurgery"
        ],
        "founder": [
          {
            "@type": "Person",
            "name": "Dr. Vikas Sengar",
            "jobTitle": "Consultant Gastroenterologist & Hepatologist"
          },
          {
            "@type": "Person",
            "name": "Dr. Sangeeta Sengar",
            "jobTitle": "Senior ENT Specialist & Otolaryngologist"
          }
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://themedihelp.com/#dr-vikas-sengar",
        "name": "Dr. Vikas Sengar",
        "jobTitle": "Consultant Gastroenterologist, Hepatologist & Therapeutic Endoscopist",
        "description": "Leading Gastroenterologist in Kanpur with DM from SGPGI Lucknow and over a decade of clinical experience in advanced endoscopy, liver disorders, and GI care.",
        "worksFor": {
          "@id": "https://themedihelp.com/#hospital"
        },
        "medicalSpecialty": "Gastroenterology",
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "GSVM Medical College, Kanpur" },
          { "@type": "EducationalOrganization", "name": "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGI), Lucknow" }
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://themedihelp.com/#dr-sangeeta-sengar",
        "name": "Dr. Sangeeta Sengar",
        "jobTitle": "Senior ENT Specialist, Neuro-Otologist & Sialendoscopy Surgeon",
        "description": "Renowned ENT Specialist in Kanpur with MS in ENT from GSVM Medical College Kanpur, specialized training in Neuro-Otology from SGPGI Lucknow, and Sialendoscopy from IMMAST Mumbai.",
        "worksFor": {
          "@id": "https://themedihelp.com/#hospital"
        },
        "medicalSpecialty": "Otolaryngology",
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "GSVM Medical College, Kanpur" },
          { "@type": "EducationalOrganization", "name": "SGPGI Lucknow" },
          { "@type": "EducationalOrganization", "name": "ESI Hospital, New Delhi" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://themedihelp.com/#website",
        "url": "https://themedihelp.com",
        "name": "Medi Help Hospital Kanpur",
        "publisher": {
          "@id": "https://themedihelp.com/#hospital"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}