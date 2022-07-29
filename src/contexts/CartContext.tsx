import { createContext, ReactNode, useContext, useState } from 'react'
import { produce } from 'immer'

export type ProductType = {
  id: number
  url: string
  name: string
  price: number
  quantity: number
}

type CartContextType = {
  products: ProductType[]
  addProduct: (product: ProductType) => void
}

const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<ProductType[]>([])

  const addProduct = (clientProduct: ProductType) => {
    const productWithSameIdIndex = products.findIndex(
      (product) => product.id === clientProduct.id,
    )

    const newProducts = produce(products, (draft) => {
      if (productWithSameIdIndex !== -1) {
        const product = draft[productWithSameIdIndex]

        product.quantity += clientProduct.quantity
      } else {
        draft.push(clientProduct)
      }
    })

    setProducts(newProducts)
  }

  return (
    <CartContext.Provider value={{ products, addProduct }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
