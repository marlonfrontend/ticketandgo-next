'use client'

import { Grid, GridItem, Button } from '@/components'
import { ProductDetailProps } from './ProductDetail.types'
import { useProduct } from '@/stores'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Product } from '@/types'
import { ProductDetailStyle } from './ProductDetail.styles'

export const ProductDetail = ({ item }: ProductDetailProps) => {
  const { addCartItem } = useProduct()
  const router = useRouter()
  const {
    thumb,
    infoProduct,
    title,
    category,
    descriptionTitle,
    descriptionText,
    price,
  } = ProductDetailStyle()

  const createOrder = (product: Product) => {
    addCartItem(product)
    router.push('/cart')
  }

  return (
    <>
      <Grid gap={5}>
        <GridItem col={12} md={6}>
          <div className={thumb()}>
            <Image
              src={item?.image ?? '/img/no-image.jpg'}
              alt={item?.title ?? 'Não encontrado'}
              className="object-fit mx-auto"
              width={240}
              height={200}
            />
          </div>
        </GridItem>

        <GridItem col={12} md={6}>
          <div className={infoProduct()}>
            <h2 className={title()}>{item?.title}</h2>

            <span className={category()}>
              Categoria: {item?.category ?? 'Não encontrado'}
            </span>

            <div className={price()}>R$ {item?.price}</div>

            <Grid gap={3}>
              <Button color="secondary" onClick={() => addCartItem(item)}>
                Adicionar ao carrinho
              </Button>
              <Button color="secondary" onClick={() => createOrder(item)}>
                Finalizar compra
              </Button>
            </Grid>
          </div>
        </GridItem>
      </Grid>

      <div className="my-10">
        <div className={descriptionTitle()}>Descrição</div>
        <p className={descriptionText()}>{item?.description}</p>
      </div>
    </>
  )
}
