'use client'

import { createContext, useContext, PropsWithChildren } from 'react'
import { ProductProviderProps, ProductContextProps } from './Product.types'

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
)

export const ProductProvider = ({
  children,
}: PropsWithChildren<ProductProviderProps>) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)
