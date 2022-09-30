import { useCart } from "../../context/useCart"

export function Header() {
  const { cartItemsAmount } = useCart()
  return (
    <div className="flex items-center justify-between bg-background w-[100%] min-w-full h-[6.5rem] py-[2rem] px-[10rem] lg:px-[6rem] gap-[51.25rem]">
      <img
        src={'./assets/logo.svg'}
        alt=""
        className=""
      />

      <div className="flex justify-end items-center w-[16rem] h-[2.375rem] p-0 gap-[0.75rem]">
        <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] w-[8.938rem] h-[2.375rem] bg-purple-light rounded-[0.375rem]">
          <img
            src={'./assets/location-Icon.svg'}
            alt=""
            className="w-[1.375rem] h-[1.375rem]"
          />
          <p className="font-['Roboto'] font-normal text-sm leading-[1.125rem] text-purple-dark">
            Porto Alegre, RS
          </p>
        </div>
        <button className="flex justify-center items-center p-0 gap-[0.25rem] w-[2.375rem] h-[2.375rem] rounded-[0.375rem] bg-yellow-light">
          <img
            src={'./assets/cart-icon.svg'}
            alt=""
            className=""
          />
        </button>
        <div className="flex justify-center items-center w-[1.25rem] h-[1.25rem] rounded-full bg-yellow-dark mt-[-1.5rem] ml-[-1.4rem]">
          <p className="font-['Roboto'] font-bold text-xs leading-[1rem] text-white text-center">
            {cartItemsAmount ? cartItemsAmount : 0}
          </p>
        </div>
      </div>
    </div>
  )
}