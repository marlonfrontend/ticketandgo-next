import { Product } from '@/types'

export type ProductContextProps = {
  loadingProducts: boolean
  productList?: Product[]
  product?: Product

  fetchProducts: () => void
  fetchProductById: (id: string) => void
}

export type ProductProviderProps = {}
