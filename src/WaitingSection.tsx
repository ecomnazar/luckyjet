import clsx from 'clsx'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props {
    handleWaitingEnd: () => void
    isFirstBetStarted: boolean
    isSecondBetStarted: boolean
    isMobile?: boolean
}

export const WaitingSection: React.FC<Props> = ({ handleWaitingEnd, isFirstBetStarted, isSecondBetStarted, isMobile = false }) => {

    const { t } = useTranslation()
    const [percent, setPercent] = React.useState(100)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPercent(prev => {
                if (prev === 0) {
                    handleWaitingEnd()
                    clearInterval(interval)
                    return 0
                }
                return prev - 1
            })
        }, 40)
    }, [isFirstBetStarted, isSecondBetStarted])

    return (
        <div className={clsx('flex flex-col items-center justify-center', {
            'h-[64vh]': !isMobile,
            'h-[30vh]': isMobile
        })}>
            <img className={clsx('', {
                'w-48': !isMobile,
                'w-24': isMobile
            })} src='/rocket-spinner.svg' />
            <h2 className={clsx('text-white uppercase text-center mt-4 tracking-1 max-w-[300px] mx-auto', {
                'text-[28px]': !isMobile,
                'text-[18px]': isMobile
            })}>{t('sonrakiTuruBekleme')}</h2>
            <div className='w-[250px] h-[6px] mt-6 rounded-full bg-[#2C283C]'>
                <div style={{ width: `${percent}%` }} className='h-full rounded-full bg-[#8B52EC]' />
            </div>
        </div>
    )
}
