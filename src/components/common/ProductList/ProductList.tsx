import { Grid, GridItem, ProductCard } from '@/components'

export const ProductList = () => {

  return (
    <Grid gap={5}>
      <GridItem col={12} key={2}>
        <ProductCard/>
      </GridItem>
    </Grid>
  )
}