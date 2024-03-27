import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { ShoppingCartStyle } from './ShoppingCart.styles'
import { useProduct } from '@/stores'

export const ShoppingCart = () => {
  const { cartTotal } = useProduct()

  const { base, badge } = ShoppingCartStyle()

  return (
    <Link href="/cart" className={base()}>
      <ShoppingBag strokeWidth={1.5} />
      {!!cartTotal && <div className={badge()}>{cartTotal}</div>}
    </Link>
  )
}
