'use client'

import { BackButton, Card, Grid } from '@/components'
import { Trash2Icon } from 'lucide-react'
import { useProduct } from '@/stores'
import { Product } from '@/types'
import Image from 'next/image'

const Page = () => {
  const { cartItems, removeCartItem } = useProduct()

  const handleRemove = (product: Product) => {
    removeCartItem(product)
  }

  return (
    <>
      <BackButton />

      <Grid gap={4}>
        {cartItems?.map((product) => (
          <Card key={product.id}>
            <Grid justify="between">
              <div className="flex gap-10">
                <div className="w-20 h-20 overflow-hidden">
                  <Image
                    src={product?.image}
                    className="object-contain h-20 mx-auto"
                    width={90}
                    height={90}
                    alt={product.title}
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm">{product.category}</div>
                  <div className="text-lg font-medium mb-3">
                    {product.title}
                  </div>

                  <div
                    className="inline-flex items-center gap-1 text-sm hover:underline cursor-pointer text-red-600"
                    onClick={() => handleRemove(product)}
                  >
                    <Trash2Icon width={15} height={15} />
                    Excluir
                  </div>
                </div>
              </div>
              <div className="w-[150px]">
                <span className="text-sm">Preço:</span>
                <div className="text-xl font-semibold text-primary">
                  R$ {product.price}
                </div>
              </div>
            </Grid>
          </Card>
        ))}
      </Grid>
    </>
  )
}
export default Page
