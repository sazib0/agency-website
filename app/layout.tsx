import './globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from "@/components/ui/toaster";

// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Gikra | Expert ICT',
  description: 'Streamline your business with expert IT Infrastructure and Security Solutions by Gikra. We deliver reliable, scalable, and innovative IT solutions tailored to your needs.',
  keywords: 'IT infrastructure services, business IT security, ICT setup experts, SaaS solutions provider, IT consulting, cybersecurity services, cloud IT integration, managed IT support, enterprise IT solutions',
  authors: [{ name: 'Gikra' }],
  generator: 'WordPress 6.1',
  applicationName: 'Gikra',
  referrer: 'origin-when-cross-origin',
  creator: 'Gikra',
  publisher: 'Gikra',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.gikra.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Expert IT Infrastructure & Security Solutions',
    description: 'Streamline your business with expert IT Infrastructure and Security Solutions by Gikra. We deliver reliable, scalable, and innovative IT solutions tailored to your needs.',
    url: 'https://www.gikra.com',
    siteName: 'Gikra',
    images: [
      {
        url: 'https://www.gikra.com/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert IT Infrastructure & Security Solutions',
    description: 'Streamline your business with expert IT Infrastructure and Security Solutions by Gikra. We deliver reliable, scalable, and innovative IT solutions tailored to your needs.',
    images: ['https://www.gikra.com/assets/images/twitter-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  verification: {
    google: 'verification_token',
    other: {
      'msvalidate.01': 'F3751C43ABC40B3998DF744D95C7BEA5',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'X-UA-Compatible': 'IE=edge',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-inter min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}