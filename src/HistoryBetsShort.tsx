import clsx from 'clsx'
import React from 'react'
import { HistoryIconButton } from './HistoryIconButton'

interface Props {
    historyBets: number[]
    setHistoryBetFull: (value: React.SetStateAction<boolean>) => void
    isMobile?: boolean
}


export const HistoryBetsShort: React.FC<Props> = ({ historyBets, setHistoryBetFull, isMobile = false }) => {
    return (
        <div className={clsx('z-[999] w-full top-0 left-0 p-3 space-x-2 overflow-scroll', {
            'absolute': !isMobile,
            'relative': isMobile
        })}>
            <div className='flex items-center space-x-2 overflow-scroll'>
                {historyBets.map((item, idx) => {
                    return <div className={clsx('text-white font-normal rounded-md font-sans text-[12px] py-1.5 px-3', {
                        'bg-[#8351D4]': idx % 2 === 0,
                        'bg-[#5974DE]': idx % 2 !== 0,
                    })}>
                        {item}x
                        <div>
                        </div>
                    </div>
                })}
            </div>
            <HistoryIconButton setHistoryBetFull={setHistoryBetFull} className='absolute h-8 w-8 right-0 top-1/2 -translate-y-1/2 bg-[#141126] p-1 rounded-[4px]' />
        </div>
    )
}
