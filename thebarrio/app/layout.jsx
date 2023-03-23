import './globals.css'
import { Montserrat } from '@next/font/google';
import Navbar from './Navbar';

const fontAnton = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'MineCommunity',
  description: 'Unofficial Website of MineCommunity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontAnton.className}`}>
        
        {children}
        
        </body>
    </html>
  )
}
