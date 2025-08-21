import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ing. Salvador Bermudez - Desarrollador Web',
  description: 'Ingeniero en Computación y Desarrollador Web especializado en React, Next.js, TypeScript y Node.js. Experto en arquitectura de estado (Redux) e integración de APIs.',
  keywords: 'React, Next.js, TypeScript, Node.js, Desarrollador Web, Ingeniero, Redux, APIs',
  authors: [{ name: 'Ing. Salvador Bermudez' }],
  openGraph: {
    title: 'Ing. Salvador Bermudez - Desarrollador Web',
    description: 'Ingeniero en Computación y Desarrollador Web especializado en React, Next.js, TypeScript y Node.js',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white text-secondary-900">
        {children}
      </body>
    </html>
  )
}
