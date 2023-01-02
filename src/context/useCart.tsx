import { createContext, ReactNode, useContext, useState } from 'react'

import { CoffeComponentProps } from '../types/coffe'

interface CartContextData {
  cartItemsAmount: number
  coffesToBuy: string[]
  addCoffeToCart: (item: string) => void
  removeCoffeFromCart: (item: string) => void
  addCoffe: (item: AddCoffeProps) => void
}

type AddCoffeProps = {
  coffeTitle: string
  coffeAmount: number
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartItemsAmount, setCartItensAmount] = useState<number>(0)
  const [coffesToBuy, setCoffeToBuy] = useState<string[]>([])

  const addCoffeToCart = (item: string) => {
    setCoffeToBuy([...coffesToBuy, item])
  }

  const removeCoffeFromCart = (item: string) => {
    const coffes = coffesToBuy.indexOf(item)
    coffesToBuy.splice(coffes, 1)
    setCoffeToBuy(coffesToBuy)
  }

  const getCoffesAmount = (id: string, amount: number) => {
    //  retorna um array com o id repetido pelo amount
    const idAmount = []

    for (let i = 0; i < amount; i++) {
      idAmount.push(id)
    }

    return idAmount
  }

  const addCoffe = ({ coffeTitle, coffeAmount }: AddCoffeProps) => {
    const coffesAmount = getCoffesAmount(coffeTitle, coffeAmount)

    if (cartItemsAmount > 1) {
      setCartItensAmount((state) => {
        return state + coffesAmount?.length
      })
    } else {
      setCartItensAmount(coffesAmount?.length)
    }

    if (coffesToBuy?.length) {
      coffesAmount.map((coffe) => {
        setCoffeToBuy((state) => {
          return [...state, coffe]
        })
      })
    } else {
      setCoffeToBuy(coffesAmount)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        coffesToBuy,
        addCoffeToCart,
        removeCoffeFromCart,
        addCoffe
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const cartContext = useContext(CartContext)
  return cartContext
}
