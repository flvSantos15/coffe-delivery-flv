import coffeHome from '../../../public/assets/coffe-home.png'
import Icon_2 from '../../../public/assets/Icon-1.svg'
import Icon_3 from '../../../public/assets/Icon-2.svg'
import Icon_4 from '../../../public/assets/Icon-3.svg'
import Icon_1 from '../../../public/assets/Icon.svg'

const itensLeft = [
  {
    icon: Icon_1,
    description: 'Compra simples e segura'
  },
  {
    icon: Icon_2,
    description: 'Entrega rápida e rastreada'
  },
]

const itensRight = [
  {
    icon: Icon_3,
    description: 'Embalagem mantém o café intacto'
  },
  {
    icon: Icon_4,
    description: 'O café chega fresquinho até você'
  },
]

export function Intro() {
  return (
    <div className="flex justify-between w-[100%] h-[100%]">
      <div className='flex flex-col justify-between h-[100%]'>
        <div className="flex flex-col items-start p-0 gap-[1rem] w-[36.75rem] h-[12rem]">
          <h1 className="font-['Baloo_2'] font-extrabold text-[3rem] leading-[3.875rem] text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="font-['Roboto'] font-normal text-xl leading-[1.25rem] text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </p>
        </div>
        <div className="flex justify-between w-[35.438rem] h-[5.25rem]">
          <div className="flex flex-col justify-between">
            {itensLeft.map((item) => {
              return (
                <div className="flex items-center p-0 gap-[0.75rem]">
                  <img src={item.icon} alt="" />
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-text">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col justify-between">
            {itensRight.map((item) => {
              return (
                <div className="flex items-center p-0 gap-[0.75rem]">
                  <img src={item.icon} alt="" />
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-text">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <img src={coffeHome} alt="" className="w-[29.75rem] h-[22.5rem]" />
    </div>
  )
}