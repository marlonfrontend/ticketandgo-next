import { Card, Button } from '@/components'
import { ProductCardProps } from './ProductCard.types'
import Image from 'next/image'
import Link from 'next/link'

export const ProductCard = ({ title, price, thumb }: ProductCardProps) => {
  return (
    <Card>
      <Link href="/" className="h-[200px] mb-5">
        <Image
          src={thumb}
          width={200}
          height={200}
          alt={title}
          className="object-contain h-[200px] mx-auto p-5"
        />
      </Link>
      <div className="text-sm line-clamp-2 h-10">{title}</div>
      <div className="text-xl font-semibold my-2">{price}</div>
      <Button color="secondary">Comprar</Button>
    </Card>
  )
}
