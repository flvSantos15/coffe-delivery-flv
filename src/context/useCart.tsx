import { createContext, ReactNode, useContext, useState } from 'react'

interface CartContextData {
  cartItemsAmount: number
  increaseCartItens: () => void
  decreaseCartItens: () => void
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartItemsAmount, setCartItensAmount] = useState<number>(0)

  function increaseCartItens() {
    setCartItensAmount((state) => {
      return state + 1
    })
  }

  function decreaseCartItens() {
    if (cartItemsAmount > 0) {
      setCartItensAmount((state) => {
        return state - 1
      })
    } else {
      setCartItensAmount(0)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        increaseCartItens,
        decreaseCartItens
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartContext = useContext(CartContext)
  return cartContext
}