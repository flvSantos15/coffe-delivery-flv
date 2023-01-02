import { useEffect, useState } from 'react'
import coffes from '../../../coffeList.json'
import { api } from '../../services/api'
import { getCoffeList } from '../../services/getCoffeList'
import { CoffeComponentProps } from '../../types/coffe'
import { CoffeComponent } from './CoffeComponent'

const buttonLabel = [
  {
    label: 'TRADICIONAL'
  },
  {
    label: 'ESPECIAL'
  },
  {
    label: 'COM LEITE'
  },
  {
    label: 'ALCOÓLICO'
  },
  {
    label: 'GELADO'
  }
]

export function ListCoffe() {
  const [coffeList, setCoffeList] = useState<CoffeComponentProps[]>([])

  const handleGetCoffeList = async () => {
    const data = await getCoffeList()

    setCoffeList(data as CoffeComponentProps[])
  }

  useEffect(() => {
    handleGetCoffeList()
  }, [])

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-[100%] max-w-[90rem] h-[100%] px-[2rem] lg:px-[6rem] py-[2rem]">
        <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center justify-between gap-3 w-[100%] mb-[1.2rem]">
          <h3 className="font-['Baloo_2'] font-extrabold text-[1.5rem] lg:text-[2rem] leading-[1.75rem] lg:leading-[2.625rem] text-base-subtitle">
            Nossos cafés
          </h3>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <div className="flex items-center p-0 gap-[0.5rem] lg:w-[26rem] h-[1.563rem]">
              {buttonLabel.map((label, index) => {
                return (
                  <button
                    key={index}
                    className="flex items-start py-[0.375rem] px-[0.75rem] gap-[0.5rem] h-[1.563rem] border border-solid border-yellow rounded-[6.25rem]"
                  >
                    <p className="font-['Roboto'] font-bold text-[0.625rem] leading-[0.813rem] text-yellow-dark">
                      {label.label}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        {/* lista do componente de café */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {coffeList?.map((coffe) => {
            return (
              <CoffeComponent
                key={coffe.id}
                id={coffe.id}
                coffeTitle={coffe.coffeTitle}
                coffeDescription={coffe.coffeDescription}
                coffeImage={coffe.coffeImage}
                coffeTag={coffe.coffeTag}
                coffePrice={coffe.coffePrice}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
