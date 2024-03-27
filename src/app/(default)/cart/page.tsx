'use client'

import { BackButton, Card, Grid, ProductItemCart } from '@/components'
import { useProduct } from '@/stores'

const Page = () => {
  const { cartItems } = useProduct()

  return (
    <>
      <BackButton />

      <Grid gap={4}>
        {cartItems?.map((product) => (
          <ProductItemCart key={product.id} item={product} />
        ))}

        {!cartItems.length && (
          <Card>
            <div className="text-lg text-center">
              Nenhum produdo foi adicionado no carrinho
            </div>
          </Card>
        )}
      </Grid>
    </>
  )
}
export default Page
