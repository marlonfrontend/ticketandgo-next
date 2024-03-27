import { Grid, GridItem, ProductCard } from '@/components'
import { useProduct } from '@/stores'
import { useEffect } from 'react'

export const ProductList = () => {
  const { productList, fetchProducts } = useProduct()

  useEffect(() => {
    fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid gap={4}>
      {productList?.map((item) => (
        <GridItem col={12} md={3} key={item.id}>
          <ProductCard
            id={item.id}
            thumb={item.image}
            title={item.title}
            price={item.price}
          />
        </GridItem>
      ))}
    </Grid>
  )
}
