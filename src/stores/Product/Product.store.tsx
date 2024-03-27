'use client'

import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useMemo,
} from 'react'
import { ProductProviderProps, ProductContextProps } from './Product.types'
import { getProducts, getProductById } from '@/services'
import { toast } from 'react-toastify'
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
  const [cartItems, setCartItems] = useState<Product[]>([])

  const cartTotal = useMemo(() => cartItems.length, [cartItems])

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

  const addCartItem = (product: Product) => {
    if (cartItems.some((item) => item.id === product.id)) {
      return
    }
    setCartItems((prevCartItems) => [...prevCartItems, product])
    toast.success('Produto adicionado ao carrinho')
  }

  const clearProduct = () => {
    setProduct(undefined)
  }

  return (
    <ProductContext.Provider
      value={{
        loadingProducts,
        productList,
        product,
        fetchProducts,
        fetchProductById,
        clearProduct,
        addCartItem,
        cartTotal,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)
