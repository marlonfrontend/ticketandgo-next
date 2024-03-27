'use client'

import { ProductDetail, BackButton } from '@/components'
import { useProduct } from '@/stores'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

const Page = () => {
  const { product, fetchProductById, clearProduct } = useProduct()

  const params = useParams() as { id: string }

  useEffect(() => {
    fetchProductById(params.id)
    return () => {
      clearProduct()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BackButton />
      <ProductDetail item={product} />
    </>
  )
}

export default Page
