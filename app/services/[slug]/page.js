import { notFound } from 'next/navigation'
import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceDetailContent from '@/components/services/ServiceDetailContent'
import ServiceFAQSection from '@/components/services/ServiceFAQSection'
import RelatedServicesSection from '@/components/services/RelatedServicesSection'
import AppointmentSection from '@/components/AppointmentSection'

// Service data
const servicesData = {
  'gastroenterology': {
    title: 'Gastroenterology Services',
    subtitle: 'Expert Digestive Health Care',
    description: 'Comprehensive gastroenterology and hepatology services with advanced endoscopic procedures.',
    content: `Our gastroenterology department, led by Dr. Vikas Sengar, offers comprehensive diagnosis and treatment of digestive system disorders. We specialize in advanced endoscopic procedures and provide personalized care for all gastrointestinal conditions.`,
    services: [
      'Advanced Endoscopy & Colonoscopy',
      'ERCP (Endoscopic Retrograde Cholangiopancreatography)',
      'Cholangioscopy',
      'Management of Liver Disorders',
      'Pancreatic Disease Treatment',
      'Inflammatory Bowel Disease Care',
      'Gastric and Intestinal Disorders',
      'Hepatitis Treatment'
    ],
    procedures: [
      {
        name: 'Upper Endoscopy',
        description: 'Diagnostic and therapeutic procedures for upper GI tract'
      },
      {
        name: 'Colonoscopy',
        description: 'Complete colon examination and polyp removal'
      },
      {
        name: 'ERCP',
        description: 'Advanced procedure for bile duct and pancreatic conditions'
      }
    ],
    doctor: {
      name: 'Dr. Vikas Sengar',
      qualification: 'MBBS, MD, DM (Gastroenterology)',
      specialty: 'Consultant Gastroenterologist & Hepatologist',
      experience: '10+ Years Experience',
      description: 'Dr. Vikas Sengar is a distinguished name in the field of Gastroenterology and Digestive Health. With advanced training from SGPGI Lucknow and extensive experience in treating complex gastrointestinal disorders, he is known for his precision, compassion, and patient-first approach.',
      education: [
        'MBBS – GSVM Medical College, Kanpur',
        'MD (Internal Medicine) – GSVM Medical College, Kanpur',
        'DM (Gastroenterology) – SGPGI, Lucknow'
      ],
      expertise: [
        'Advanced Endoscopy & Colonoscopy',
        'ERCP (Endoscopic Retrograde Cholangiopancreatography)',
        'Cholangioscopy',
        'Management of Liver, Pancreatic & Digestive Disorders'
      ]
    }
  },
  'ent': {
    title: 'ENT Services',
    subtitle: 'Ear, Nose & Throat Specialists',
    description: 'Complete ENT care including neuro-otology and minimally invasive treatments.',
    content: `Our ENT department provides comprehensive care for ear, nose, and throat conditions. Dr. Sangeeta Sengar specializes in neuro-otology and advanced minimally invasive procedures.`,
    services: [
      'Neuro-Otology (Inner Ear & Balance Disorders)',
      'Sialendoscopy (Minimally Invasive Salivary Gland Treatment)',
      'Hearing Loss Treatment',
      'Sinus Surgery',
      'Throat Disorders Management',
      'Pediatric ENT Care',
      'Voice Disorders Treatment',
      'Sleep Apnea Management'
    ],
    procedures: [
      {
        name: 'Sialendoscopy',
        description: 'Minimally invasive salivary gland stone removal'
      },
      {
        name: 'Functional Endoscopic Sinus Surgery',
        description: 'Advanced sinus surgery with minimal invasion'
      },
      {
        name: 'Tympanoplasty',
        description: 'Eardrum repair and hearing restoration'
      }
    ],
    doctor: {
      name: 'Dr. Sangeeta Sengar',
      qualification: 'MBBS, MS (ENT)',
      specialty: 'Senior ENT Specialist (Otolaryngologist)',
      experience: '12+ Years Experience',
      description: 'Dr. Sangeeta Sengar is a highly respected ENT specialist, with rich experience from SGPGI Lucknow and ESI Hospital, New Delhi. Known for her empathetic care and clinical expertise, she has become a beacon of trust for patients dealing with ENT disorders.',
      education: [
        'MBBS – GSVM Medical College, Kanpur',
        'MS (ENT) – GSVM Medical College, Kanpur',
        'Advanced Training in Neuro-Otology – SGPGI, Lucknow',
        'Specialized in Sialendoscopy – IMMAST, Mumbai'
      ],
      expertise: [
        'Neuro-Otology (Inner Ear & Balance Disorders)',
        'Sialendoscopy (Minimally Invasive Salivary Gland Treatment)',
        'Diagnosis & Treatment of Ear, Nose & Throat Conditions',
        'Pediatric ENT Care'
      ]
    }
  },
  'emergency-care': {
    title: 'Emergency Care Services',
    subtitle: '24/7 Emergency Medical Care',
    description: 'Round-the-clock emergency services with immediate response for critical conditions.',
    content: `Our emergency department operates 24/7 with experienced medical staff and advanced life support equipment. We provide immediate care for all medical emergencies.`,
    services: [
      '24/7 Emergency Room',
      'Trauma Care',
      'Cardiac Emergency Care',
      'Stroke Management',
      'Respiratory Emergencies',
      'Poisoning Treatment',
      'Accident & Injury Care',
      'Critical Care Transport'
    ],
    procedures: [
      {
        name: 'Advanced Life Support',
        description: 'Complete emergency life support systems'
      },
      {
        name: 'Emergency Surgery',
        description: 'Immediate surgical interventions when needed'
      },
      {
        name: 'Critical Care Stabilization',
        description: 'Patient stabilization before specialized care'
      }
    ],
    doctor: {
      name: 'Emergency Medical Team',
      qualification: 'Specialized Emergency Physicians',
      experience: 'Round-the-clock coverage'
    }
  }
}

export async function generateMetadata({ params }) {
  const service = servicesData[params.slug]
  
  if (!service) {
    return {
      title: 'Service Not Found | Medi Help Hospital Kanpur',
    }
  }

  const pageTitle = `Best ${service.title} in Kanpur | Medi Help Hospital`
  const pageDescription = `${service.description} Advanced ${service.title.toLowerCase()} care in Sarvodaya Nagar, Kanpur by expert specialists at Medi Help Hospital.`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: `${service.title.toLowerCase()}, ${params.slug} in Kanpur, best ${params.slug} doctor Kanpur, gastro specialist Kanpur, ENT doctor Kanpur, Medi Help Hospital Sarvodaya Nagar, emergency care Kanpur`,
    alternates: {
      canonical: `/services/${params.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://themedihelp.com/services/${params.slug}`,
      siteName: 'Medi Help Hospital Kanpur',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: '/images/gallery/1.jpg',
          width: 1200,
          height: 630,
          alt: `${service.title} at Medi Help Hospital Kanpur`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ['/images/gallery/1.jpg'],
    }
  }
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug]

  if (!service) {
    notFound()
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "@id": `https://themedihelp.com/services/${params.slug}#procedure`,
        "name": service.title,
        "description": service.description,
        "howPerformed": service.content,
        "provider": {
          "@type": "Hospital",
          "name": "Medi Help Hospital Kanpur",
          "url": "https://themedihelp.com"
        }
      },
      {
        "@type": "MedicalWebPage",
        "@id": `https://themedihelp.com/services/${params.slug}#webpage`,
        "url": `https://themedihelp.com/services/${params.slug}`,
        "name": `Best ${service.title} in Kanpur | Medi Help Hospital`,
        "description": service.description,
        "breadcrumb": {
          "@id": `https://themedihelp.com/services/${params.slug}#breadcrumb`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://themedihelp.com/services/${params.slug}#breadcrumb`,
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": service.title,
            "item": `https://themedihelp.com/services/${params.slug}`
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceFAQSection serviceSlug={params.slug} />
      <RelatedServicesSection currentService={params.slug} />
      <AppointmentSection />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }))
}