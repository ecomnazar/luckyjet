import React from "react"

const CARD_NUMBER = '6016 6073 7082 4431'

export const WithdrawPage = () => {

    const [withdrawState, setWithdrawState] = React.useState(0)

    const changeState = (state: number) => {
        setWithdrawState(state)
    }

    return (
        <div className='w-screen h-screen font-sans bg-[#0A0F1D] flex items-center justify-center'>
            {withdrawState === 0 &&
                <div className="max-w-[900px] w-full rounded-xl h-[800px] bg-white overflow-hidden flex items-start">
                    <div className="w-[45%] h-full bg-[#EEF1F9] p-8">
                        <div className="flex items-center gap-x-3">
                            {/* <img src="/flags/brazil.svg" alt="" /> */}
                            <img src="/flags/columbia.png" alt="" className="w-[32px] h-[32px] rounded-full" />
                            <div className="-space-y-1">
                                <h4 className="text-[#AFB1BD] text-[16px]">Metodos de page para la region</h4>
                                <h3 className="text-[#6D717C] text-[15px]">Colombia</h3>
                                {/* <h3 className="text-[#6D717C] text-[15px]">Brazil (Brasil)</h3> */}
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-8">
                            <div className="basis-[48%] flex flex-col justify-between p-3 rounded-xl h-[90px] bg-gradient-to-r from-[#408DF2] via-[#3879D9] to-[#336AC7]">
                                <div>
                                    <img src="/icons/perfect.svg" alt="" />
                                </div>
                                <h4 className="text-white font-normal">Perfect money</h4>
                            </div>
                            <div className="basis-[48%] flex flex-col justify-between p-3 rounded-xl h-[90px] bg-white shadow-xl">
                                <div className="flex items-center gap-x-0.5">
                                    <img src="/icons/bitcoin.svg" alt="" />
                                    <img src="/icons/ethereum.svg" alt="" />
                                    <div className="w-[26px] h-[26px] rounded-full bg-[#E0EEFD] text-[#1E4A7E] flex items-center justify-center text-[10px] font-semibold">+13</div>
                                </div>
                                <h4 className="text-black font-normal">Criptomoneda</h4>
                            </div>
                        </div>

                    </div>
                    <div className="w-[55%] py-8 px-6 text-[#353439] flex flex-col h-full">
                        <div className="flex-1">
                            <div className="flex items-center justify-between w-full">
                                <h2 className="text-[25px] font-semibold">Retirar</h2>
                                <div className="flex items-center gap-x-2">
                                    <p className="text-[#AFAFAF]">ID 81887180</p>
                                    <img src="/icons/closeIcon.svg" alt="" />
                                </div>
                            </div>
                            <div className="-space-y-1 font-normal">
                                <p className="text-[17px]">Limite de un retito:</p>
                                <p className="text-[17px]">50$ - 100 000 $</p>
                            </div>
                            <div className="bg-[#EEF2F7] h-[60px] flex items-center rounded-xl px-4 mt-8 gap-x-3">
                                <img src="/icons/perfectRed.svg" alt="" />
                                <div className="w-[2px] h-[40%] bg-[#94A1A9]" />
                                <input placeholder="100 $" className="outline-none text-[#B0B1BC] w-full bg-[#EEF2F7]" />
                            </div>
                            <div className="bg-[#EEF2F7] h-[60px] flex items-center justify-between rounded-xl px-4 mt-4 gap-x-3">
                                <h4 className="text-[#B0B1BC]">{CARD_NUMBER}</h4>
                                <div className="w-2 h-2 bg-[#72757A] rounded-full" />
                            </div>
                            <div className="flex items-center justify-center gap-x-4 mt-4">
                                <div className="bg-[#EEF2F7] text-[#B0B1BC] py-2 px-3 rounded-lg">100 $</div>
                                <div className="bg-[#EEF2F7] text-[#B0B1BC] py-2 px-3 rounded-lg">250 $</div>
                            </div>
                            <button className="bg-[#3165C1] h-[54px] text-center w-full text-white rounded-xl mt-4 font-medium text-[17px]">Retirar</button>
                            <button onClick={() => changeState(1)} className="text-[#3165C1] mt-8 font-semibold">Detalles</button>
                        </div>
                        <div>
                            <h3 className="text-[#AFB1BD] text-[15px]">© 2024 1WIN</h3>
                            <h3 className="text-[#AFB1BD] text-[15px]">Todos los derechos estas reservados y protegidos por la loy</h3>
                        </div>
                    </div>
                </div>
            }
            {withdrawState === 1 &&
                <div className="max-w-[900px] w-full rounded-xl h-[550px] bg-white overflow-hidden p-4">
                    <div className="flex items-center justify-between w-full">
                        <h3 className="text-[24px] font-semibold">Desglose</h3>
                        <div className="flex items-center justify-between w-full">
                            <h2 className="text-[23px] font-semibold">Retirar</h2>
                            <div className="flex items-center gap-x-2">
                                <p className="text-[#AFAFAF] text-[15px]">ID 81887180</p>
                                <button onClick={() => changeState(0)}>
                                    <img src="/icons/closeIcon.svg" alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4 px-2 border-b border-[#F5F5F5] pb-4 mt-4">
                        <h4 className="text-[#353439] text-[15px]">Todos</h4>
                        <h4 className="text-[#353439] text-[15px]">Historial de pagos</h4>
                        <div className="bg-gradient-to-r from-[#408DF2] via-[#3879D9] to-[#336AC7] text-[#ffffff] text-[16px] rounded-full px-2 py-0.5 ml-2">Retiros</div>
                    </div>
                    <div className="bg-[#EEEEF7] h-[100px] rounded-xl p-4">
                        <div className="flex items-center justify-between">
                            <h4 className="text-[#353439] font-semibold text-[20px]">Perfect Money</h4>
                            <h4 className="text-[#BEC0CC]">24 de agoste de 2023 | 19:34</h4>
                        </div>
                        <div className="flex items-center justify-between">
                            <h4 className="text-[#BEC0CC] mt-0.5">U1•••••78</h4>
                            <div className="flex items-center gap-x-2">
                                <h4 className="text-[#13A24B] font-semibold text-[20px]">- 223 $</h4>
                                <img src="/icons/tick.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
