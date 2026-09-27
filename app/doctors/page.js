import DoctorsHeroSection from '@/components/doctor/DoctorsHeroSection'
import AllDoctorsSection from '@/components/doctor/AllDoctorsSection'
import DoctorSpecialtiesSection from '@/components/doctor/DoctorSpecialtiesSection'
import AppointmentSection from '@/components/AppointmentSection'
import DoctorPanelSection from '@/components/doctor/DoctorPanelSection'

export const metadata = {
  title: 'Best Doctors in Kanpur | Top Gastroenterologist & ENT Specialist',
  description: 'Consult top doctors in Kanpur at Medi Help Hospital. Featuring Dr. Vikas Sengar (DM Gastroenterology, SGPGI) and Dr. Sangeeta Sengar (MS ENT, GSVM), offering expert liver, gastro, sinus, and ENT care.',
  keywords: 'best doctors in Kanpur, gastroenterologist in Kanpur, top ENT specialist Kanpur, Dr Vikas Sengar Kanpur, Dr Sangeeta Sengar ENT, stomach specialist Kanpur, ear nose throat doctor Kanpur, liver doctor Kanpur',
  alternates: {
    canonical: '/doctors',
  },
  openGraph: {
    title: 'Top Medical Specialists in Kanpur | Medi Help Hospital',
    description: 'Meet leading specialists Dr. Vikas Sengar (Gastroenterology) and Dr. Sangeeta Sengar (ENT) at Medi Help Hospital, Sarvodaya Nagar, Kanpur.',
    url: 'https://themedihelp.com/doctors',
    siteName: 'Medi Help Hospital Kanpur',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function DoctorsPage() {
  const doctorsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://themedihelp.com/doctors#dr-vikas-sengar",
        "name": "Dr. Vikas Sengar",
        "jobTitle": "Consultant Gastroenterologist & Hepatologist",
        "image": "https://themedihelp.com/images/dr-vikash-sengar.png",
        "medicalSpecialty": "Gastroenterology",
        "telephone": "+91 98398 00199",
        "worksFor": {
          "@type": "Hospital",
          "name": "Medi Help Hospital Kanpur",
          "url": "https://themedihelp.com"
        },
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "GSVM Medical College Kanpur" },
          { "@type": "EducationalOrganization", "name": "SGPGI Lucknow (DM Gastroenterology)" }
        ]
      },
      {
        "@type": "Physician",
        "@id": "https://themedihelp.com/doctors#dr-sangeeta-sengar",
        "name": "Dr. Sangeeta Sengar",
        "jobTitle": "Senior ENT Specialist & Neuro-Otologist",
        "image": "https://themedihelp.com/images/Sangeeta_Sengar.jpg",
        "medicalSpecialty": "Otolaryngology",
        "telephone": "+91 98398 00199",
        "worksFor": {
          "@type": "Hospital",
          "name": "Medi Help Hospital Kanpur",
          "url": "https://themedihelp.com"
        },
        "alumniOf": [
          { "@type": "EducationalOrganization", "name": "GSVM Medical College Kanpur" },
          { "@type": "EducationalOrganization", "name": "SGPGI Lucknow" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://themedihelp.com/doctors#breadcrumb",
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
            "name": "Doctors",
            "item": "https://themedihelp.com/doctors"
          }
        ]
      }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorsSchema) }}
      />
      <DoctorsHeroSection />
      <AllDoctorsSection />
      <DoctorSpecialtiesSection />
      <DoctorPanelSection />
      <AppointmentSection />
    </div>
  )
}