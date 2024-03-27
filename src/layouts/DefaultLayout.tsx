'use client'

import { PropsWithChildren } from 'react'
import { Header, Footer, Container } from '@/components'
import { ProductProvider } from '@/stores'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <ProductProvider>
      <Header />
      <main className="py-10">
        <Container>{children}</Container>
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </ProductProvider>
  )
}
