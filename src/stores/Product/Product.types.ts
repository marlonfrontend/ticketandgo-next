import { Product } from '@/types'

export type ProductContextProps = {
  loadingProducts: boolean
  productList?: Product[]
  product?: Product
  cartTotal: number

  fetchProducts: () => void
  addCartItem: (product: Product) => void
  fetchProductById: (id: string) => void
  clearProduct: () => void
}

export type ProductProviderProps = {}
