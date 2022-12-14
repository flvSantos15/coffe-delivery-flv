import { useEffect, useState } from 'react'

import iconCartButton from '../../../public/assets/icon-cart-button.svg'
import { useCart } from '../../context/useCart'

import { CoffeComponentProps } from '../../types/coffe'

export function CoffeComponent({
  id,
  coffeImage,
  coffeTag,
  coffeTitle,
  coffeDescription,
  coffePrice
}: CoffeComponentProps) {
  const { addCoffeToCart, removeCoffeFromCart, addCoffe, coffesToBuy } =
    useCart()

  const [cartItens, setCartItens] = useState(0)

  const handleIncreaseCartItens = () => {
    setCartItens(cartItens + 1) // aumenta a qunatidade no state
  }

  const handleDecreaseCartItens = () => {
    if (cartItens > 0) {
      setCartItens(cartItens - 1)
    }
  }

  const handleAddCoffe = () => {
    // aqui devo adicionar o id ao hook com a quantidade escolhida
    addCoffe({ coffeTitle, coffeAmount: cartItens })
  }

  useEffect(() => {
    if (coffesToBuy?.length) {
      coffesToBuy.map((coffe) => {
        const coffesName = []

        if (coffe === coffeTitle) {
          coffesName.push(coffe)
        }

        // setCartItens((state) => {
        //   return state + coffesName?.length
        // })
      })
    }
  }, [coffesToBuy, coffeTitle])

  const isCartItensEmpty = cartItens === 0

  return (
    <div className="flex flex-col items-center w-[16rem] h-[19.375rem] rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-card gap-[0.5rem] px-[1rem]">
      <img
        src={coffeImage}
        alt=""
        className="w-[7.5rem] h-[7.5rem] mt-[-1rem]"
      />

      <div className="flex justify-center items-center px-[0.5rem] py-[0.25rem] gap-[0.25rem] bg-yellow-light rounded-full">
        <p className="font-['Roboto'] font-bold text-[0.625rem] leading-[0.813rem] text-yellow-dark">
          {coffeTag}
        </p>
      </div>

      <p className="font-['Baloo_2'] font-bold text-[1.25rem] leading-[1.625rem] text-center text-base-subtitle">
        {coffeTitle}
      </p>

      <p className="font-['Roboto'] font-normal text-sm leading-[1.125rem] text-center text-base-label">
        {coffeDescription}
      </p>

      <div className="flex justify-between items-center p-0 gap-[1.813rem]">
        <p className="font-['Baloo_2'] font-extrabold text-[1.5rem] leading-[1.938rem] text-right text-base-text">
          <span className="font-['Roboto'] font-normal text-sm leading-[1.125rem]">
            R$
          </span>{' '}
          {coffePrice}
        </p>
        <div className="flex items-center p-0 gap-[0.5rem] w-[7.5rem] h-[2.375rem]">
          <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] bg-base-button rounded-[0.375rem]">
            <button
              onClick={handleDecreaseCartItens}
              className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
            >
              -
            </button>
            <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-title">
              {cartItens}
            </p>
            <button
              onClick={handleIncreaseCartItens}
              className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple"
            >
              +
            </button>
          </div>
          <button onClick={handleAddCoffe} disabled={isCartItensEmpty}>
            <img src={iconCartButton} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
