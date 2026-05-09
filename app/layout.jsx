import './globals.css'

export const metadata = {
  title: 'Kareem Basha | Full Stack Developer',
  description: 'Modern portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
