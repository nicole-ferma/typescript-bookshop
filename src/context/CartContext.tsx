import { createContext, ReactNode, useContext, useState } from "react"

type CartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type CartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
} 

const CartContext = createContext({} as CartContext)

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider( { children }: CartProviderProps ) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}