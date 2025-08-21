import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Salva - Desarrollador Full Stack',
  description: 'Desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js. Experto en arquitectura de estado (Redux) e integración de APIs.',
  keywords: 'React, Next.js, TypeScript, Node.js, Full Stack, Desarrollador, Redux, APIs',
  authors: [{ name: 'Salva' }],
  openGraph: {
    title: 'Salva - Desarrollador Full Stack',
    description: 'Desarrollador Full Stack especializado en React, Next.js, TypeScript y Node.js',
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
