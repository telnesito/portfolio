import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Ternera',
  description: 'Portafolio de Carlos Ternera',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="images/maleta.png" />
      <body className={inter.className}>{children}
      </body>


    </html>
  )
}
