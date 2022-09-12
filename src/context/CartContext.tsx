import { createContext, ReactNode, useContext } from "react"

type CartProviderProps = {
  children: ReactNode
}

const CartContext = createContext({})

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider( { children }: CartProviderProps ) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}