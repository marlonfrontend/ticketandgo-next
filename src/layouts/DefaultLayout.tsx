'use client'

import { PropsWithChildren } from 'react'
import { Header, Footer, Container } from '@/components'
import { ProductProvider } from '@/stores'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useIsMounted } from '@/hooks'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }

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
