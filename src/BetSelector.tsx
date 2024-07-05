import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';

interface Props {
    value: string;
    setValue: (val: string) => void;
    setIsBetStarted: React.Dispatch<React.SetStateAction<boolean>>
    isBetStarted: boolean
    showComplete: boolean
    showWinningBetAmount: boolean
    coff: string
    handleStop: (number: '1' | '2') => void
    index: '1' | '2'
    isMobile?: boolean
}


export const BetSelector: React.FC<Props> = ({ value, setValue, setIsBetStarted, isBetStarted, showComplete, showWinningBetAmount, coff, handleStop, index, isMobile = false }) => {
    const { t } = useTranslation()

    const valueWithCoff = Number(coff) * Number(value.split(' ')[0])


    const handleStopBet = () => {
        // setIsBetStarted(false)
        handleStop(index)
    }

    return (
        <div className='h-[130px] w-full flex items-center justify-between flex-wrap gap-x-2'>
            <div className='bg-[#221D43] rounded-xl h-full overflow-hidden w-full'>
                <div className='px-2 py-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <div className='flex items-center gap-x-2'>
                                <div className='bg-[#1A1533] w-6 h-6 rounded-md flex items-center justify-center'>
                                    <div className='bg-[#251F4A] w-[18px] h-[18px] rounded-md'></div>
                                </div>
                                <h4 className='text-white font-sans font-medium text-[12px]'>{t('otoBahis')}</h4>
                            </div>
                            <div className='flex items-center gap-x-2'>
                                <div className='bg-[#1A1533] w-6 h-6 rounded-md flex items-center justify-center'>
                                    <div className='bg-[#251F4A] w-[18px] h-[18px] rounded-md'></div>
                                </div>
                                <h4 className='text-white font-sans font-medium text-[12px]'>{t('otoParaCekme')}</h4>
                            </div>
                        </div>
                        <div className='bg-[#191433] w-[120px] py-[5.5px] rounded-md flex items-center justify-center'>
                            <h4 className='font-sans font-medium text-[12.5px] text-white'><span className='text-[#8E86BC]'>x</span> 2.00</h4>
                        </div>
                    </div>
                </div>
                <div className='bg-[#26204C] h-full w-full rounded-xl flex items-start justify-between p-2 gap-x-2'>
                    <div className={clsx('relative basis-[49.5%] h-[60%] rounded-lg bg-[#1A1534] w-[100px]', {
                    })}>
                        <div className='p-1 flex items-center justify-between'>
                            <button className={clsx('h-6 w-6 bg-[#221D44] rounded-lg flex items-center justify-center', {
                                '!w-10': isMobile
                            })}><div className='h-[2px] rounded-full w-[50%] bg-[#928AC1]' /></button>
                            <div className='flex items-center justify-center gap-x-1'>
                                <input defaultValue={value} onChange={(e) => setValue(e.target.value)} className='bg-transparent outline-none w-full text-white text-center' />
                            </div>
                            <button className={clsx('h-6 w-6 bg-[#221D44] rounded-lg flex items-center justify-center text-[#928AC1] text-[17px]', {
                                '!w-10': isMobile
                            })}>+</button>
                        </div>
                        <div className='w-full h-[1px] bg-[#1A1534] mt-1' />
                        <div className='p-1 flex justify-between -translate-y-[1px]'>
                            <div className='bg-[#221D44] text-[#928AC1] font-sans text-[10px] basis-[24%] flex items-center justify-center rounded-md py-1'>+50</div>
                            <div className='bg-[#221D44] text-[#928AC1] font-sans text-[10px] basis-[24%] flex items-center justify-center rounded-md py-1'>+100</div>
                            <div className='bg-[#221D44] text-[#928AC1] font-sans text-[10px] basis-[24%] flex items-center justify-center rounded-md py-1'>+200</div>
                            <div className='bg-[#221D44] text-[#928AC1] font-sans text-[10px] basis-[24%] flex items-center justify-center rounded-md py-1'>+500</div>
                        </div>
                    </div>
                    {/* #EA496B */}
                    <div className='basis-[49.5%] h-[60%] rounded-lg bg-[#1A1534] p-1 flex items-center justify-center'>
                        {!isBetStarted && <button onClick={() => setIsBetStarted(true)} className=' text-white flex items-center justify-center text-[18px] bg-gradient-to-br from-[#5A2BF2] via-[#7847E7] to-[#8850ED] w-full h-full rounded-lg'>{t('bahis')}</button>}
                        {isBetStarted && !showComplete && !showWinningBetAmount && <button className=' text-white flex items-center justify-center text-[18px] bg-gradient-to-br from-[#EA496B] via-[#EB6382] to-[#EC688D] w-full h-full rounded-lg'>{t('iptalEt')}</button>}
                        {isBetStarted && showComplete && <button className=' text-white flex items-center justify-center text-[18px] bg-[#1A1534] w-full h-full rounded-lg'>{t('bekleyen')}</button>}
                        {isBetStarted && !showComplete && showWinningBetAmount && <button onClick={handleStopBet} className='-space-y-1 text-white flex flex-col items-center justify-center text-[18px] bg-gradient-to-br from-[#F09243] via-[#F2B567] to-[#F7D76F] w-full h-full rounded-lg'>
                            <h4 className='text-[15px]'>{valueWithCoff.toFixed(2)} {t('currency')}</h4>
                            <h4>{t('al')}</h4>
                        </button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
