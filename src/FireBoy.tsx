import clsx from 'clsx';
import React from 'react'

interface Props {
    isFinished: boolean
}

export const FireBoy: React.FC<Props> = ({ isFinished }) => {
    return (
        <div className={clsx('absolute z-[999]', {
            'finish': isFinished,
            'animate-moveFireBoy': !isFinished
        })}>
            <div className='relative boy'>
                <img src='/boy.png' className='!w-32 relative z-[99]' />
                <img src='/fire.svg' className='w-12 -translate-y-[70%] translate-x-[-90%] rotate-[230deg]' />
            </div>
        </div>
    )
}
