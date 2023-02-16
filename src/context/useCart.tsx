import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { CoffeComponentProps } from '../types/coffe'

export interface AddCoffeProps extends CoffeComponentProps {
  coffeAmount: number
}
interface CartContextData {
  cartItemsAmount: number
  coffesToBuy: string[]
  addCoffeToCart: (product: AddCoffeProps) => void
  increaseCartMovieAmount: (item: AddCoffeProps) => void
  decreaseCartMovieAmount: (item: AddCoffeProps) => void
  removeCoffeFromCart: (product: AddCoffeProps) => void
  addCoffe: (item: AddCoffeProps) => void
  cartProducts: AddCoffeProps[]
  cartItems: AddCoffeProps[]
  currentProduct: string
  setCartProducts: (product: AddCoffeProps[]) => void
}

interface CartProviderData {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderData) {
  const [cartItemsAmount, setCartItensAmount] = useState<number>(0)
  const [coffesToBuy, setCoffeToBuy] = useState<string[]>([])
  const [cartProducts, setCartProducts] = useState<AddCoffeProps[]>([])
  const [currentProduct, setCurrentProduct] = useState('')
  const [cartItems, setCartItems] = useState<AddCoffeProps[]>([])

  const addCoffeToCart = (item: AddCoffeProps) => {
    setCurrentProduct(item.coffeTitle)

    const coffeExist = cartProducts.find(
      (coffe) => coffe.id === item.id
    ) as AddCoffeProps

    if (!coffeExist) {
      setCartProducts((state) => [...state, item])
    } else {
      setCartProducts(cartProducts.filter((coffe) => coffe.id !== item.id))

      setCartProducts((state) => [
        ...state,
        { ...coffeExist, coffeAmount: coffeExist.coffeAmount + 1 }
      ])
    }
  }

  const increaseCartMovieAmount = (coffe: AddCoffeProps) => {
    const coffeExist = cartProducts.find(
      (item) => item.id === coffe.id
    ) as AddCoffeProps

    setCartProducts(cartProducts.filter((item) => item.id !== coffe.id).sort())

    setCartProducts((state) => [
      ...state,
      { ...coffeExist, coffeAmount: coffeExist.coffeAmount + 1 }
    ])
  }

  const decreaseCartMovieAmount = (coffe: AddCoffeProps) => {
    const coffeExist = cartProducts.find(
      (item) => item.id === coffe.id
    ) as AddCoffeProps

    setCartProducts(cartProducts.filter((item) => item.id !== coffe.id).sort())

    if (coffeExist.coffeAmount > 1) {
      setCartProducts((state) => [
        ...state,
        { ...coffeExist, coffeAmount: coffeExist.coffeAmount - 1 }
      ])
    }
  }

  const removeCoffeFromCart = (item: AddCoffeProps) => {
    const cartProductsFiltered = cartProducts.filter(
      (product) => product.id !== item.id
    )
    setCartProducts(cartProductsFiltered)
  }

  const addCoffe = (coffe: AddCoffeProps) => {
    // const coffesAmount = getCoffesAmount(coffeTitle, coffeAmount)
    // if (cartItemsAmount > 1) {
    //   setCartItensAmount((state) => {
    //     return state + coffesAmount?.length
    //   })
    // } else {
    //   setCartItensAmount(coffesAmount?.length)
    // }
    // if (coffesToBuy?.length) {
    //   coffesAmount.map((coffe) => {
    //     setCoffeToBuy((state) => {
    //       return [...state, coffe]
    //     })
    //   })
    // } else {
    //   setCoffeToBuy(coffesAmount)
    // }
  }

  useEffect(() => {
    if (cartProducts.length > 0) {
      setCartItems([])
      for (let i = 0; i < cartProducts.length; i++) {
        for (let k = 1; k <= cartProducts[i].coffeAmount; k++) {
          setCartItems((state) => [...state, cartProducts[i]])
        }
      }
    }

    if (cartProducts.length === 0) {
      setCartItems([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts, currentProduct])

  return (
    <CartContext.Provider
      value={{
        cartItemsAmount,
        coffesToBuy,
        addCoffeToCart,
        removeCoffeFromCart,
        addCoffe,
        cartItems,
        cartProducts,
        currentProduct,
        setCartProducts,
        decreaseCartMovieAmount,
        increaseCartMovieAmount
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
