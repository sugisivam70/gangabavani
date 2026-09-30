import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GBA Manufacturing',
  description: 'Created by Adwin Solutions',
  generator: 'GBA Manufacturing',
  icons: {
    icon: '/Assets/logo.png',
  },
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
