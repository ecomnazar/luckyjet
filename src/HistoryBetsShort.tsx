import clsx from 'clsx'
import React from 'react'

interface Props {
    historyBets: number[]
    setHistoryBetFull: (value: React.SetStateAction<boolean>) => void
}


export const HistoryBetsShort: React.FC<Props> = ({ historyBets, setHistoryBetFull }) => {
    return (
        <div className='flex items-center absolute w-full top-0 left-0 p-3 space-x-2 overflow-scroll'>
            {historyBets.map((item, idx) => {
                return <div className={clsx('text-white font-normal rounded-md font-sans text-[12px] py-1.5 px-3', {
                    'bg-[#8351D4]': idx % 2 === 0,
                    'bg-[#5974DE]': idx % 2 !== 0
                })}>
                    {item}x
                    <div>
                    </div>
                </div>
            })}
            <div onClick={() => setHistoryBetFull(true)} className='absolute h-8 w-8 right-0 top-1/2 -translate-y-1/2 bg-[#141126] p-1 rounded-[4px]'>
                <div className='bg-[#3A326C] rounded-[4px] flex items-center justify-center w-full h-full'>

                    <button>
                        <img className='w-5 h-5' src='/history-icon.svg' />
                    </button>
                </div>
            </div>
        </div>
    )
}
