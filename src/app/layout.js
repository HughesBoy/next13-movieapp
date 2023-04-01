import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/NavBar'

export const metadata = {
  title: 'Movie database web app',
  description: 'Simple app to try nextjs 13 features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Providers>
          <Header />
          <Navbar />
          <main>
            {children}
          </main>
        </Providers>

      </body>
    </html>
  )
}
