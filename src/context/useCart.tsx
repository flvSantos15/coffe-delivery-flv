import { createContext, ReactNode, useContext, useState } from 'react'
import { CoffeComponentProps } from '../types/coffe'

interface CartContextData {
  cartItemsAmount: number
  coffesToBuy: string[]
  increaseCartItens: () => void
  decreaseCartItens: () => void
  addCoffeToCart: (item: string) => void
  removeCoffeFromCart: (item: string) => void
  addCoffe: (item: AddCoffeProps) => void
}

type AddCoffeProps = {
  coffeId: number
  coffeAmount: number
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartItemsAmount, setCartItensAmount] = useState<number>(0)
  // const [coffesToBuy, setCoffeToBuy] = useState<CoffeComponentProps[]>([])
  const [coffesToBuy, setCoffeToBuy] = useState<string[]>([])
  const [cartCoffe, setCartCoffe] = useState<CoffeComponentProps[]>([])

  const increaseCartItens = () => {
    setCartItensAmount((state) => {
      return state + 1
    })
  }

  const decreaseCartItens = () => {
    if (cartItemsAmount > 0) {
      setCartItensAmount((state) => {
        return state - 1
      })
    } else {
      setCartItensAmount(0)
    }
  }

  const addCoffeToCart = (item: string) => {
    setCoffeToBuy([...coffesToBuy, item])
  }

  const removeCoffeFromCart = (item: string) => {
    const coffes = coffesToBuy.indexOf(item)
    coffesToBuy.splice(coffes, 1)
    setCoffeToBuy(coffesToBuy)
  }

  const addCoffe = ({
    coffeId,
    coffeAmount
  }: AddCoffeProps) => {
    // copia de tds os itens no carrinho, que ainda n existe
    const updatedCart = [...cartCoffe]
    console.log(coffeId, coffeAmount)
    const productExists = updatedCart.find(coffe => coffe.id === coffeId)

    // currentAmount == coffeAmount

    // se o cafe ja existe no carrinho eu atualizo a qntdd
    if (productExists) {
      // add
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        coffesToBuy,
        increaseCartItens,
        decreaseCartItens,
        addCoffeToCart,
        removeCoffeFromCart,
        addCoffe
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartContext = useContext(CartContext)
  return cartContext
}