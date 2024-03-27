'use client'

import { PropsWithChildren } from 'react'
import { Header, Footer, Container } from '@/components'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  )
}
