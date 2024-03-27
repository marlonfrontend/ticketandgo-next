import { Product } from '@/types'

export type ProductContextProps = {
  loadingProducts: boolean
  productList?: Product[]
  product?: Product
  cartTotal: number
  cartItems: Product[]

  fetchProducts: () => void
  fetchProductById: (id: string) => void
  addCartItem: (product: Product) => void
  removeCartItem: (product: Product) => void
  clearProduct: () => void
}

export type ProductProviderProps = {}
