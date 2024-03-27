'use client'

import { Grid, GridItem, Button } from '@/components'
import { ProductDetailProps } from './ProductDetail.types'
import { useProduct } from '@/stores'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Product } from '@/types'

export const ProductDetail = ({ item }: ProductDetailProps) => {
  const { addCartItem } = useProduct()
  const router = useRouter()

  const createOrder = (product: Product) => {
    addCartItem(product)
    router.push('/cart')
  }

  return (
    <>
      <Grid gap={5}>
        <GridItem col={12} md={6}>
          <div className="flex justify-center items-center border py-5 h-[460px]">
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
          <div className="md:pl-12">
            <h2 className="text-2xl font-semibold mb-5">{item?.title}</h2>
            <span className="text-sm">
              Categoria: {item?.category ?? 'Não encontrado'}
            </span>
            <div className="text-2xl font-medium my-5">R$ {item?.price}</div>
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
        <div className="text-xl font-medium mb-5">Descrição</div>
        <p className="text-sm">{item?.description}</p>
      </div>
    </>
  )
}
