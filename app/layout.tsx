import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Noé | Portfolio',
  description: 'Noé is a strategy and data analyst with 4 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
            <Head>
                <title>Noé Bernard - Data Consultant & Portfolio</title>
                <meta name="google-site-verification" content="LKaB2KPOAZvZAPBw3dEavgpy5eSc0wWiAht1Alxc168" />
                <meta name="description" content="Noé Bernard is a data consultant specializing in data analysis, visualization, and project management. Explore his portfolio showcasing various projects and skills." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://noe-bernard.vercel.app" />
                
            </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative   dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-red-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-blue-100 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>
        <Analytics/>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            {children}
            <Footer />
            <Toaster position="top-right"/>
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        </body>
    </html>
  )
}
