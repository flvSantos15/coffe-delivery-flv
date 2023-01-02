import coffeHome from '/assets/coffe-home.png'
import Icon_2 from '/assets/Icon-1.svg'
import Icon_3 from '/assets/Icon-2.svg'
import Icon_4 from '/assets/Icon-3.svg'
import Icon_1 from '/assets/Icon.svg'

const itensLeft = [
  {
    icon: Icon_1,
    description: 'Compra simples e segura'
  },
  {
    icon: Icon_2,
    description: 'Entrega rápida e rastreada'
  }
]

const itensRight = [
  {
    icon: Icon_3,
    description: 'Embalagem mantém o café intacto'
  },
  {
    icon: Icon_4,
    description: 'O café chega fresquinho até você'
  }
]

export function Intro() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between w-[100%] max-w-[90rem] h-[34rem] px-[2rem] md:px-[6rem] lg:px-[10rem] py-[1rem] md:py-[4rem] lg:py-[5.75rem]">
        <div className="flex flex-col justify-between gap-4">
          <div className="flex flex-col items-start p-0 gap-[1rem] w-full md:w-full lg:w-[36.75rem] h-[8rem] md:h-[10rem] lg:h-[12rem]">
            <h1 className="font-['Baloo_2'] font-extrabold text-center text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.5rem] md:leading-[2.5rem] lg:leading-[3.875rem] text-base-title">
              Encontre o café perfeito para qualquer hora do dia
            </h1>
            <p className="font-['Roboto'] text-center font-normal text-xl md:text-2xl leading-[1.25rem] text-base-subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-row justify-between w-full md:w-full lg:w-[35.438rem] lg:h-[5.25rem] gap-2">
            <div className="flex flex-col justify-between gap-2">
              {itensLeft.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center p-0 gap-[0.75rem]"
                  >
                    <img src={item.icon} alt="" />
                    <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-text">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col justify-between gap-2">
              {itensRight.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center p-0 gap-[0.75rem]"
                  >
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

        <img
          src={coffeHome}
          alt=""
          className="w-[15rem] h-[12rem] lg:w-[29.75rem] lg:h-[22.5rem]"
        />
      </div>
    </div>
  )
}
