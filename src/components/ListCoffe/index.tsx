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
  },
]

export function ListCoffe() {
  return (
    <div className="w-[100%] min-w-full px-[10rem] py-[2rem]">
      <div className="flex items-center justify-between w-[100%]">
        <h3 className="font-[Ballo_2] font-extrabold text-[2rem] leading-[2.625rem] text-base-subtitle">
          Nossos cafés
        </h3>
        <div className="flex items-center p-0 gap-[0.5rem] w-[26rem] h-[1.563rem]">
          {buttonLabel.map((label) => {
            return (
              <button className="flex items-start py-[0.375rem] px-[0.75rem] gap-[0.5rem] h-[1.563rem] border border-solid border-yellow rounded-[6.25rem]">
                <p className="font-['Roboto'] font-bold text-[0.625rem] leading-[0.813rem] text-yellow-dark">
                  {label.label}
                </p>
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}