import React from 'react'
import clsx from 'clsx';

interface Props {
    isFinished: boolean
    isMobile?: boolean
}

export const FireBoy: React.FC<Props> = ({ isFinished, isMobile = false }) => {
    return (
        <div className={clsx('absolute z-[999]', {
            'finish': isFinished,
            'animate-moveFireBoy': !isFinished
        })}>
            <div className={'relative boy'}>
                <div className={clsx('', {
                    'scale-[0.55] translate-y-[85px] -translate-x-[20px]': isMobile
                })}>
                    <img src='/boy.png' className='!w-32 relative z-[99]' />
                    <img src='/fire.svg' className='w-12 -translate-y-[70%] translate-x-[-90%] rotate-[230deg]' />
                </div>
            </div>
        </div>
    )
}
