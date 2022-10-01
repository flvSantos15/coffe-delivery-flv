import { createContext, ReactNode, useContext, useState } from 'react'

interface CartContextData {
  cartItemsAmount: number
  increaseCartItens: () => void
  decreaseCartItens: () => void
  addCoffeToCart: (item: string) => void
  removeCoffeFromCart: (item: string) => void
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartItemsAmount, setCartItensAmount] = useState<number>(0)
  const [coffesToBuy, setCoffeToBuy] = useState<string[]>([])

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

  function addCoffeToCart(item: string) {
    setCoffeToBuy([...coffesToBuy, item])
  }

  function removeCoffeFromCart(item: string) {
    const coffes = coffesToBuy.indexOf(item)
    coffesToBuy.splice(coffes, 1)
    setCoffeToBuy(coffesToBuy)
  }

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        increaseCartItens,
        decreaseCartItens,
        addCoffeToCart,
        removeCoffeFromCart
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartContext = useContext(CartContext)
  return cartContext
}