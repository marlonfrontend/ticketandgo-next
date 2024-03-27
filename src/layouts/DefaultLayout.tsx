'use client'

import { PropsWithChildren } from 'react'
import { Header, Footer, Container } from '@/components'
import { ProductProvider } from '@/stores'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <ProductProvider>
      <Header />
      <main className="py-5">
        <Container>{children}</Container>
      </main>
      <Footer />
    </ProductProvider>
  )
}
