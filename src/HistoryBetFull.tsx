import clsx from 'clsx'
import React from 'react'

interface Props {
    setHistoryBetFull: React.Dispatch<React.SetStateAction<boolean>>
    historyBets: number[]
}

export const HistoryBetFull: React.FC<Props> = ({ historyBets, setHistoryBetFull }) => {
    return (
        <div className='absolute rounded-md py-4 top-0 left-0 w-full z-[9999] bg-[#1F1A3D]'>
            <div className='flex items-center justify-between px-3 pb-4 border-b border-[#282828]'>
                <h2 className='text-white'>TUR GEÇMIŞI</h2>
                <button onClick={() => setHistoryBetFull(false)} className='bg-[#2D2022] p-1.5 rounded-md'>
                    <img src="/gold-close-icon.svg" alt="" />
                </button>
            </div>
            <div className='flex items-center gap-2 flex-wrap px-3 bg-[#221D44] pt-2'>
                {historyBets.slice(32).map((item, idx) => {
                    return <div className={clsx('text-white font-medium rounded-md font-sans text-[12px] py-1.5 px-3', {
                        'bg-[#8351D4]': idx % 2 === 0,
                        'bg-[#5974DE]': idx % 2 !== 0
                    })}>
                        {item}x
                        <div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}
