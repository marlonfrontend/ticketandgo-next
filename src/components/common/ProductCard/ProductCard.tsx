'use client'

import { Card, Button } from '@/components'
import { ProductCardProps } from './ProductCard.types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const ProductCard = ({ id, title, price, thumb }: ProductCardProps) => {
  const router = useRouter()

  return (
    <Card>
      <Link
        href={`/product/${id}`}
        className="h-[220px] flex items-center justify-center mb-5"
      >
        <Image
          src={thumb}
          width={200}
          height={200}
          alt={title}
          className="object-contain h-[200px] p-5"
        />
      </Link>
      <div className="text-sm line-clamp-2 h-10">{title}</div>
      <div className="text-xl font-semibold my-2">R$ {price}</div>
      <Button color="secondary" onClick={() => router.push(`/product/${id}`)}>
        Comprar
      </Button>
    </Card>
  )
}
