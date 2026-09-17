import type { Metadata } from 'next';
import { Montserrat, Poppins, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bloodpact.life'),
  title: {
    default: 'BloodPact Life — Technology Built Around Life',
    template: '%s | BloodPact Life',
  },
  description:
    'BloodPact Life engineers precision medical equipment, hospital technology, clinical data intelligence, and connected healthcare infrastructure for modern care.',
  keywords: [
    'BloodPact Life',
    'medical equipment',
    'patient monitoring',
    'hospital technology',
    'critical care',
    'clinical data intelligence',
    'medical AI algorithms',
    'connected healthcare systems',
    'ICU ventilators',
    'surgical systems',
    'institutional medical procurement',
  ],
  authors: [{ name: 'BloodPact Life Medical Engineering' }],
  creator: 'BloodPact Life',
  publisher: 'BloodPact Life Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bloodpact.life',
    title: 'BloodPact Life — Technology Built Around Life',
    description:
      'Medical systems, intelligent healthcare technology and connected infrastructure engineered for modern care.',
    siteName: 'BloodPact Life',
    images: [
      {
        url: '/images/hero-monitor.jpg',
        width: 1200,
        height: 630,
        alt: 'BloodPact Life Medical Technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BloodPact Life — Medical Technology & Intelligent Care',
    description:
      'Precision medical hardware, hospital infrastructure, and clinical signal intelligence.',
    images: ['/images/hero-monitor.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'BloodPact Life',
    url: 'https://bloodpact.life',
    logo: 'https://bloodpact.life/images/hero-monitor.jpg',
    description:
      'Global medical technology company engineering precision clinical equipment, hospital infrastructure, and clinical signal intelligence.',
    sameAs: ['https://bloodpact.life'],
    knowsAbout: [
      'Patient Monitoring',
      'Intensive Care Ventilators',
      'Clinical Signal Processing',
      'Hospital IoT Infrastructure',
      'Biomedical Engineering',
    ],
  };

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${sourceSerif.variable} antialiased scroll-smooth`}
      style={{ colorScheme: 'light' }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-black selection:bg-[#B11226] selection:text-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
