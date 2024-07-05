import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    setHistoryBetFull: (value: React.SetStateAction<boolean>) => void
}

export const HistoryIconButton: React.FC<Props> = ({ setHistoryBetFull, className }) => {
    return (
        <div onClick={() => setHistoryBetFull(true)} className={clsx('', className)}>
            <div className='bg-[#3A326C] rounded-[4px] flex items-center justify-center w-full h-full'>
                <button>
                    <img className='w-5 h-5' src='/history-icon.svg' />
                </button>
            </div>
        </div>
    )
}
