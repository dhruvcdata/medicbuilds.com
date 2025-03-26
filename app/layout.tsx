import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MedicBuilds',
  description: 'Beautiful Websites for Healthcare Professionals',
  generator: 'CdataInsights',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
