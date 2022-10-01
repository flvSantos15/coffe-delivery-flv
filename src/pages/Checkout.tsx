import credCardIcon from '../../public/assets/credcard-Icon.svg'
import debitIcon from '../../public/assets/debit-Icon-1.svg'
import locationIcon from '../../public/assets/location-Icon-outline.svg'
import mochaccino from '../../public/assets/Mochaccino.png'
import cashMoneyIcon from '../../public/assets/money-bill-Icon-2.svg'
import moneyIcon from '../../public/assets/Money-Icon.svg'
import trashBin from '../../public/assets/TrashBin-Icon.svg'

export function CheckoutPage() {
  return (
    <div className="flex items-center justify-center">
      <form className="flex items-start justify-between mt-[1rem] w-[100%] max-w-[90rem] px-[10rem] lg:px-[6rem]">
        {/* esquerdo */}
        <div className="flex flex-col items-start">
          {/* title */}
          <h2 className="font-['Baloo_2'] font-bold text-[1.125rem] leading-[1.438rem] text-center text-base-subtitle">
            Complete seu pedido
          </h2>
          {/* content */}
          <div className="flex flex-col items-start p-0 gap-[0.75rem] w-[40rem] h-[36.938rem] mt-[0.5rem]">
            <div className="flex flex-col items-start p-[2.5rem] gap-[2rem] w-[40rem] h-[23.25rem] bg-base-card rounded-[0.375rem]">
              {/* endereço */}
              <div className="flex items-start p-0 gap-[0.5rem] w-[100%]">
                <img src={locationIcon} alt="" />
                <div className="flex flex-col items-start p-0 gap-[0.125rem]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-subtitle">
                    Endereço de Entrega
                  </p>
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.313rem] text-center text-base-text">
                    Informe o endereço onde deseja receber seu pedido
                  </p>
                </div>
              </div>
              {/* form */}
              <div className="flex flex-col items-start p-0 gap-[1rem]">
                <input
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                  placeholder="CEP"
                />
                <input
                  className="flex items-start p-[0.75rem] gap-[0.25rem] w-[35rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                  placeholder="Rua"
                />
                <div className="flex justify-between w-[100%]">
                  <input
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Número"
                  />
                  <input
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[21.75rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Complemento"
                  />
                </div>
                <div className="flex justify-between w-[100%]">
                  <input
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[12.5rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Bairro"
                  />
                  <input
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[17.25rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="Cidade"
                  />
                  <input
                    className="flex items-start p-[0.75rem] gap-[0.25rem] w-[3.75rem] h-[2.625rem] bg-[#eeeded] rounded-[0.25rem] border border-solid  border-[#e6e5e5]"
                    placeholder="UF"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start p-[2.5rem] gap-[2rem] w-[40rem] h-[12.938rem] bg-base-card rounded-[0.375rem]">
              {/* endereço */}
              <div className="flex items-start p-0 gap-[0.5rem] w-[100%]">
                <img src={moneyIcon} alt="" />
                <div className="flex flex-col items-start p-0 gap-[0.125rem]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-center text-base-subtitle">
                    Pagamento
                  </p>
                  <p className="font-['Roboto'] font-normal text-sm leading-[1.313rem] text-center text-base-text">
                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                  </p>
                </div>
              </div>
              {/* form */}
              <div className="flex justify-center items-center p-0 gap-[0.75rem]">
                <button className="flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md bg-base-button">
                  <img src={credCardIcon} />
                  <p className="text-center font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">CARTÂO DE CRÉDITO</p>
                </button>
                <button className="flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md bg-base-button">
                  <img src={debitIcon} />
                  <p className="text-center font-['Roboto'] font-normal text-xs leading-[1.188rem] text-base-text">CARTÂO DE DÉBITO</p>
                </button>
                <button className="flex items-center p-[1rem] gap-[0.75rem] w-[11.125rem] h-[3.188rem] rounded-md bg-base-button">
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
            Cafés selecionados
          </h2>
          {/* content */}
          <div className="flex flex-col items-start p-[2.5rem] gap-[1rem] w-[28rem] h-[31.125rem] mt-[0.5rem] bg-base-card rounded-tl-[0.375rem] rounded-br-[0.375rem] rounded-tr-[2.75rem] rounded-bl-[2.75rem]">
            {/* itens p compra */}
            <div className="flex justify-between items-start py-[0.5rem] px-[0.25rem] gap-[3.688rem]">
              <div className="flex items-center p-0 gap-[1.25rem] w-[15.938rem] h-[4rem]">
                <img src={mochaccino} alt="" className="w-[4rem] h-[4rem]" />
                <div className="flex flex-col items-start p-0 gap-[0.5rem] w-[10.75rem] h-[100%]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-subtitle">Expresso Tradicional</p>
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
              <p className="font-['Roboto'] font-bold text-base leading-[1.313rem] text-right text-base-text w-[4rem]">R$ 9,90</p>
            </div>
            <div className="w-[100%] h-[0.5px] bg-base-hover" />
            <div className="flex justify-between items-start py-[0.5rem] px-[0.25rem] gap-[3.688rem]">
              <div className="flex items-center p-0 gap-[1.25rem] w-[15.938rem] h-[4rem]">
                <img src={mochaccino} alt="" className="w-[4rem] h-[4rem]" />
                <div className="flex flex-col items-start p-0 gap-[0.5rem] w-[10.75rem] h-[100%]">
                  <p className="font-['Roboto'] font-normal text-base leading-[1.313rem] text-base-subtitle">Expresso Tradicional</p>
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
              <p className="font-['Roboto'] font-bold text-base leading-[1.313rem] text-right text-base-text w-[4rem]">R$ 9,90</p>
            </div>
            <div className="w-[100%] h-[0.5px] bg-base-hover" />
            {/* total de valores */}
          </div>
        </div>
      </form>
    </div>
  )
}