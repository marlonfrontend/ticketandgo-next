'use client'

import { createContext, useContext, PropsWithChildren, useState } from 'react'
import { ProductProviderProps, ProductContextProps } from './Product.types'
import { getProducts, getProductById } from '@/services'
import { Product } from '@/types'

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
)

export const ProductProvider = ({
  children,
}: PropsWithChildren<ProductProviderProps>) => {
  const [loadingProducts, setLoadingProducts] = useState(false)
  const [productList, setProductList] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>()

  const fetchProducts = async () => {
    setLoadingProducts(true)
    try {
      const data = await getProducts()
      setProductList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingProducts(false)
    }
  }

  const fetchProductById = async (id: string) => {
    try {
      const data = await getProductById(id)
      setProduct(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductContext.Provider
      value={{
        loadingProducts,
        productList,
        product,
        fetchProducts,
        fetchProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)
