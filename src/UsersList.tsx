import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
    className?: string;
    totalBahis: number
    users: {
        name: string;
        amount: number;
        color: string;
        isFinished: boolean;
        finishedCoff: number;
    }[]
    counter: number
    showComplete: boolean
    isMobile?: boolean
}

export const UsersList: React.FC<Props> = ({ totalBahis, users, counter, showComplete, isMobile = false }) => {
    const { t } = useTranslation()

    return (
        <>
            <div className={clsx('bg-[#100D20] flex items-center justify-between rounded-[10px] p-0.5', {
                'mt-4': isMobile
            })}>
                <div className={clsx('basis-[32%] py-1.5 text-[13px] bg-[#221D44] font-sans text-white flex rounded-[10px] items-center justify-center', {
                    '!py-2.5': isMobile
                })}>{t('hepsi')}</div>
                <div className={clsx('basis-[32%] py-1.5 text-[13px] text-[#928AC1] font-sans flex rounded-[10px] items-center justify-center', {
                    '!py-2.5': isMobile
                })}>{t('benim')}</div>
                <div className={clsx('basis-[32%] py-1.5 text-[13px] text-[#928AC1] font-sans flex rounded-[10px] items-center justify-center', {
                    '!py-2.5': isMobile
                })}>{t('iyi')}</div>
            </div>

            <div className='flex items-center justify-between mt-4 mb-4'>
                <div>
                    <h4 className='text-[#78798A] font-sans text-[12px]'>{t('toplamBahis')}: </h4>
                    <h3 className='text-white text-[16px]'>{totalBahis}</h3>
                </div>
                <div className='bg-[#100D20] text-white p-0.5 rounded-[10px]'>
                    <div className='rounded-[10px] bg-[#221D44] py-1.5 text-[13px] font-sans px-4'>
                        <h4>{t('oncekiTur')}</h4>
                    </div>
                </div>
            </div>

            <div className='space-y-2'>
                {users.map((user, index) => {
                    const convertedNum = Math.round(user.finishedCoff * 10);
                    const isFinished = convertedNum < counter

                    if (user.finishedCoff / 10 < 1) return

                    return <div key={index} className={clsx('p-0.5 rounded-[10px] flex items-center justify-between flex-wrap', {
                        'bg-[#322058] border border-[#5E39A2]': isFinished && !showComplete,
                        'bg-[#211B42] border border-transparent': !(isFinished && !showComplete)
                    })}>
                        <div style={{ backgroundColor: user.color }} className='w-8 h-8 rounded-[10px] text-[13px] flex items-center justify-center text-white font-sans'>{user.name.slice(0, 2).toUpperCase()}</div>
                        <h3 className='text-[#928AC1] -translate-x-2 font-sans text-[12px] basis-[15%]'>{user.name.slice(0, 4)}...</h3>
                        <h5 className='text-white font-sans text-[10px]'>{user.amount} {t('currency')}</h5>
                        <div className={clsx('basis-[20%] flex items-center justify-center rounded-[7px] font-sans text-[10px] text-white py-1.5', {
                            'bg-[#6E41BB]': isFinished && !showComplete,
                        })}>{isFinished && !showComplete ? (user.finishedCoff / 10).toFixed(2) : '-'}</div>
                        <h5 className={clsx('ml-2 font-sans text-[10px] basis-[15%] mr-2', {
                            'text-[#F3BE62]': isFinished && !showComplete,
                            'text-white text-right': !(isFinished && !showComplete)
                        })}> {isFinished && !showComplete ? `${(user.amount * user.finishedCoff / 10).toFixed(2)} ${t('currency')}` : '-'}</h5>
                    </div>
                })}

            </div>
        </>
    )
}
