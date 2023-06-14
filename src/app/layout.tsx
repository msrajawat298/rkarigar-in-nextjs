import './globals.css'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })
import { Providers } from '@/Store/Provider';


export const metadata = {
  title: 'LOCALPRO Next App',
  description: 'Developed by Abdullah Moiz',
  authors: [{ name: "Abdullah Moiz", url: 'https://abdullahmoiz.vercel.app/' }],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
