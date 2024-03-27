import { client } from '@/lib'
import { Product } from '@/types'

export const getProducts = (): Promise<Product[]> => {
  return client.get(`/products`)
}

export const getProductById = (id: string): Promise<Product> => {
  return client.get(`/products/${id}`)
}
