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
  orders: ProductType[]
  addOrder: (product: ProductType) => void
  removeProduct: (orderId: number) => void
  updateProductQuantity: (orderId: number, newQuantity: number) => void
  clearCart(): void
}

const CartContext = createContext({} as CartContextType)

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [orders, setOrders] = useState<ProductType[]>([])

  const addOrder = (clientProduct: ProductType) => {
    const productWithSameIdIndex = orders.findIndex(
      (product) => product.id === clientProduct.id,
    )

    const newProducts = produce(orders, (draft) => {
      if (productWithSameIdIndex !== -1) {
        const product = draft[productWithSameIdIndex]

        product.quantity += clientProduct.quantity
      } else {
        draft.push(clientProduct)
      }
    })

    setOrders(newProducts)
  }

  const removeProduct = (productId: number) => {
    setOrders((oldProducts) =>
      oldProducts.filter((product) => product.id !== productId),
    )
  }

  const updateProductQuantity = (orderId: number, newQuantity: number) => {
    const orderIndex = orders.findIndex((order) => order.id === orderId)
    const updatedOrders = produce(orders, (draft) => {
      if (orderIndex !== -1) {
        draft[orderIndex].quantity = newQuantity
      }
    })

    setOrders(updatedOrders)
  }

  const clearCart = () => {
    setOrders([])
    localStorage.removeItem('@coffeeShop-1.0.0:purchaseInfo')
  }

  return (
    <CartContext.Provider
      value={{
        orders,
        addOrder,
        removeProduct,
        updateProductQuantity,
        clearCart,
      }}
    >
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
