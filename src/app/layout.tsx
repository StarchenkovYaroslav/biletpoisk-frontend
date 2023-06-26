import { Roboto } from 'next/font/google'

import './globals.css'

import { Layout } from '@/components/layout'
import { StoreProvider } from '@/components/store-provider/StoreProvider/StoreProvider'

export const metadata = {
  title: 'Biletpoisk',
  description: 'Leave all you money here, dear...',
}

const roboto = Roboto({ weight: ['400'], subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <StoreProvider>
          <Layout>
            {children}
          </Layout>
        </StoreProvider>
      </body>
    </html>
  )
}
