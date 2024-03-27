'use client'

import { Card, Button } from '@/components'
import { ProductCardProps } from './ProductCard.types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ProductCardStyle } from './ProductCard.styles'

export const ProductCard = ({ id, title, price, thumb }: ProductCardProps) => {
  const router = useRouter()
  const { priceText, titleText, thumbStyle, image } = ProductCardStyle()

  return (
    <Card>
      <Link href={`/product/${id}`} className={thumbStyle()}>
        <Image
          src={thumb}
          width={200}
          height={200}
          alt={title}
          className={image()}
        />
      </Link>
      <Link href={`/product/${id}`} className={titleText()}>
        {title}
      </Link>
      <div className={priceText()}>R$ {price}</div>
      <Button color="secondary" onClick={() => router.push(`/product/${id}`)}>
        Comprar
      </Button>
    </Card>
  )
}
