import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'techblockchainafr',
  description: 'Created by Blockchain Francophone Builder',
  generator: 'SharpMindset❤️',
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
