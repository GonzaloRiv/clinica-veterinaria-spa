import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })
const _playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Hospital Veterinario Integral | Viña del Mar',
  description: 'Hospital Veterinario Integral en Viña del Mar. Consultas, cirugías, urgencias, hospitalización, ecografías, radiografías y más. 7 años cuidando a tus mascotas con excelencia médica.',
  keywords: ['veterinaria viña del mar', 'hospital veterinario', 'urgencias veterinarias', 'cirugía veterinaria', 'hospitalización mascotas'],
  openGraph: {
    title: 'Hospital Veterinario Integral | Viña del Mar',
    description: 'Atención veterinaria integral con los más altos estándares médicos. Consultas, cirugías, urgencias y hospitalización.',
    type: 'website',
    locale: 'es_CL',
  },
  icons: {
    icon: [
      {
        url: '/logo-hvi2.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-hvi2.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-hvi2.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-hvi2.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
