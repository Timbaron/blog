import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Akiode Timothy Blog',
  description: 'I never sabi watin i wan do sef',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="bg-blue-500">
        {children}
      </main>
      </body>
    </html>
  )
}
