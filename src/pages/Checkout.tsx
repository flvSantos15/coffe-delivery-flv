import { useCallback, useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as zod from 'zod'

import credCardIcon from '../../public/assets/credcard-Icon.svg'
import debitIcon from '../../public/assets/debit-Icon-1.svg'
import locationIcon from '../../public/assets/location-Icon-outline.svg'
import cashMoneyIcon from '../../public/assets/money-bill-Icon-2.svg'
import moneyIcon from '../../public/assets/Money-Icon.svg'
import trashBin from '../../public/assets/TrashBin-Icon.svg'

import { useCart } from '../context/useCart'

import coffes from '../../coffeList.json'
import { CoffeComponentProps } from '../types/coffe'
import { getListCoffesToBuy } from '../utils/getListCoffestoBuy'
import { api } from '../services/api'

const coffeDeliveryFormScheme = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  number: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  pagamento: zod.string()
})

type CoffeDeliveryForm = zod.infer<typeof coffeDeliveryFormScheme>

export function CheckoutPage() {
  const { coffesToBuy } = useCart()

  const [coffeList, setCoffeList] = useState<CoffeComponentProps[]>([])
  const [coffeListToBuy, setCoffeListToBuy] = useState<CoffeComponentProps[]>([])
  const [paymentMethod, setPaymentMethod] = useState('')

  const { handleSubmit, formState, reset, register } = useForm<CoffeDeliveryForm>({
    resolver: zodResolver(coffeDeliveryFormScheme)
  })

  const { errors } = formState

  const handleOnSubmit: SubmitHandler<CoffeDeliveryForm> = async (data: CoffeDeliveryForm) => {
    const response: CoffeDeliveryForm = await {
      bairro: data.bairro,
      cep: data.cep,
      rua: data.rua,
      number: data.number,
      cidade: data.cidade,
      complemento: data.complemento,
      uf: data.uf,
      pagamento: paymentMethod,
    }
    setPaymentMethod('')
    reset()
  }

  const coffeListToBuyArray: CoffeComponentProps[] = []

  function handleRemoveItemFromCart() {
    console.log("removendo")
  }

  function handleIncreaseCartItens() {
    console.log("increasing")
  }

  function handleDecreaseCartItens() {
    console.log("decreasing")
  }

  useEffect(() => {
    const coffesName = coffeList.map(item => {
      return item.coffeTitle
    })

    const coffes = getListCoffesToBuy(coffesToBuy, coffesName)

    coffeList.map(coffe => {
      if (coffes.includes(coffe.coffeTitle)) {
        coffeListToBuyArray.push(coffe)
      }
    })

    setCoffeListToBuy(coffeListToBuyArray)

  }, [coffeList])

  // essa fn j?? existe em outro lugar, arrumar dps
  useEffect(() => {
    const data: CoffeComponentProps[] = []

    // mover essa parte pra uma pasta separada em services
    // com retorno dos dados
    api.get<CoffeComponentProps[]>('/coffe').then((response) => {
      const res = response.data

      res.map((coffe) => {
        data.push({
          id: Math.random(),
          coffeTitle: coffe.coffeTitle,
          coffeDescription: coffe.coffeDescription,
          coffeImage: coffe.coffeImage,
          coffeTag: coffe.coffeTag,
          coffePrice: coffe.coffePrice
        })
      })
      
      setCoffeList(data)
    })
  }, [])


  const totalItensPrice = useCallback(() => {

  }, [])

  const normalButtonColor = "flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md bg-base-button"
  const activeButtonColor = "flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md bg-purple-light border border-solid border-[#8047F8]"

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit(handleOnSubmit)} className="flex items-start justify-between mt-[1rem] w-[100%] max-w-[90rem] px-[10rem] lg:px-[6rem]">
        {/* esquerdo */}
        <div className="flex flex-col items-start">
          {/* title */}
          <h2 className="font-['Baloo_2'] font-bold text-[1.125rem] leading-[1.438rem] text-center text-base-subtitle">
            Complete seu pedido
          </h2>
          {/* content */}
          <div className="flex flex-col items-start p-0 gap-[0.75rem] w-[40rem] h-[36.938rem] mt-[0.5rem]">
            <div className="flex flex-col items-start p-[2.5rem] gap-[2rem] w-[40rem] h-[23.25rem] bg-base-card rounded-[0.375rem]">
              {/* endere??o */}
              <div className="flex items-start p-0 gap-[0.5rem] w-[100%]">
                <img src={locationIcon} alt="" />
                <div className="flex flex-col items-start p-0 gap-[0.125rem]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-subtitle">
                    Endere??o de Entrega
                  </p>
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.313rem] text-center text-base-text">
                    Informe o endere??o onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              {/* form */}
              <div className="flex flex-col items-start p-0 gap-[1rem]">
                <input
                  id="cep"
                  type="text"
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                  placeholder="CEP"
                  {...register('cep')}
                />
                <input
                  id="rua"
                  type="text"
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-[35rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                  placeholder="Rua"
                  {...register('rua')}
                />
                <div className="flex justify-between w-[100%]">
                  <input
                    id="number"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="N??mero"
                    {...register('number')}
                  />
                  <input
                    id="complemento"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[21.75rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Complemento"
                    {...register('complemento')}
                  />
                </div>
                <div className="flex justify-between w-[100%]">
                  <input
                    id="bairro"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Bairro"
                    {...register('bairro')}
                  />
                  <input
                    id="cidade"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[17.25rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Cidade"
                    {...register('cidade')}
                  />
                  <input
                    id="uf"
                    type="text"
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[3.75rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="UF"
                    {...register('uf')}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start p-[2.5rem] gap-[2rem] w-[40rem] h-[12.938rem] bg-base-card rounded-[0.375rem]">
              <div className="flex items-start p-0 gap-[0.5rem] w-[100%]">
                <img src={moneyIcon} alt="" />
                <div className="flex flex-col items-start p-0 gap-[0.125rem]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-subtitle">
                    Pagamento
                  </p>
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.313rem] text-center text-base-text">
                    O pagamento ?? feito na entrega. Escolha a forma que deseja pagar
                  </p>
                </div>
              </div>
              {/* buttons form */}
              <div className="flex justify-center items-center p-0 gap-[0.75rem]">
                <button 
                  onClick={() => setPaymentMethod('credcard')} 
                  type="button"
                  {...register('pagamento')}
                  className={paymentMethod === 'credcard' ? activeButtonColor : normalButtonColor}
                >
                  <img src={credCardIcon} />
                  <p className="text-center font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">CART??O DE CR??DITO</p>
                </button>
                <button 
                  onClick={() => setPaymentMethod('debitcard')} 
                  type="button"
                  {...register('pagamento')}
                  className={paymentMethod === 'debitcard' ? activeButtonColor : normalButtonColor}
                >
                  <img src={debitIcon} />
                  <p className="text-center font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">CART??O DE D??BITO</p>
                </button>
                <button 
                  onClick={() => setPaymentMethod('cash')} 
                  type="button"
                  {...register('pagamento')}
                  className={paymentMethod === 'cash' ? activeButtonColor : normalButtonColor}
                >
                  <img src={cashMoneyIcon} />
                  <p className="text-center font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">DINHEIRO</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* direito */}
        <div className="flex flex-col items-start justify-start">
          {/* title */}
          <h2 className="font-['Baloo_2'] font-bold text-[1.125rem] leading-[1.438rem] text-center text-base-subtitle">
            Caf??s selecionados
          </h2>
          {/* content */}
          <div className="flex flex-col items-start p-[2.5rem] gap-[1.5rem] w-[28rem] h-[31.125rem] mt-[0.5rem] bg-base-card rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
            <div className="flex flex-col w-[100%] gap-[1rem] overflow-auto">
              {/* itens p compra */}
              {coffeListToBuy.map((coffe) => {
                return (
                  <>
                    <div key={coffe.coffeTitle} className="flex justify-between items-start py-[0.5rem] px-[0.25rem] gap-[3.688rem]">
                      <div className="flex items-center p-0 gap-[1.25rem] w-[15.938rem] h-[4rem]">
                        <img src={coffe.coffeImage} alt="" className="w-[4rem] h-[4rem]" />
                        <div className="flex flex-col items-start p-0 gap-[0.5rem] w-[10.75rem] h-[100%]">
                          <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-subtitle">
                            {coffe.coffeTitle}
                          </p>
                          <div className="flex justify-between w-[100%]">
                            <div className="flex justify-center items-center p-[0.5rem] gap-[0.25rem] bg-base-button rounded-[0.375rem] w-[4.5rem] h-[2rem]">
                              <button className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple">
                                -
                              </button>
                              <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-title">
                                1
                              </p>
                              <button className="flex justify-center items-center w-[0.875rem] h-[0.875rem] text-purple">
                                +
                              </button>
                            </div>

                            <button className="flex justify-center items-center py-0 px-[0.5rem] gap-[0.25rem] w-[5.688rem] h-[2rem] bg-base-button rounded-md">
                              <img src={trashBin} alt="" />
                              <p className="font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">
                                REMOVER
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Roboto'] font-bold text-base leading-[1.313rem] text-right text-base-text w-[4rem]">
                        {coffe.coffePrice}
                      </p>
                    </div>
                    {/* divider */}
                    <div className="w-[100%] h-[0.5px] bg-base-hover" />
                  </>
                )
              })}
            </div>

            {/* total de valores */}
            <div className="flex flex-col justify-between w-[23rem] gap-[1rem]">
              {/* items */}
              <div className="flex flex-col justify-center items-start p-0 gap-[0.75rem] h-[5.75rem]">
                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.125rem] text-right text-base-text">
                    Total de Itens
                  </p>
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-right text-base-text">
                    R$ 29,70
                  </p>
                </div>
                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.125rem] text-right text-base-text">
                    Entrega
                  </p>
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-right text-base-text">
                    R$ 3,50
                  </p>
                </div>
                <div className="flex justify-between items-center w-[100%] p-0 gap-[0.5rem] h-[1.313rem]">
                  <p className="font-['Roboto'] font-bold text-[1.25rem] leading-[1.625rem] text-right text-base-subtitle">
                    Total
                  </p>
                  <p className="font-['Roboto'] font-bold text-[1.25rem] leading-[1.625rem] text-right text-base-subtitle">
                    R$ 33,20
                  </p>
                </div>
              </div>
              {/* button */}
              <button type="submit" onClick={handleSubmit(handleOnSubmit)} className="flex justify-center items-center py-[0.75rem] px-[0.5rem] gap-[0.25rem] w-[100%] h-[2.875rem] bg-yellow rounded-md">
                <p className="font-['Roboto'] font-bold text-sm leading-[1.375rem] text-white">CONFIRMAR PEDIDO</p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}