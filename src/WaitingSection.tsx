import React from 'react'

interface Props {
    handleWaitingEnd: () => void
    isFirstBetStarted: boolean
    isSecondBetStarted: boolean
}

export const WaitingSection: React.FC<Props> = ({ handleWaitingEnd, isFirstBetStarted, isSecondBetStarted }) => {

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
        <div className='h-[64vh] flex flex-col items-center justify-center'>
            <img className='w-48' src='/rocket-spinner.svg' />
            <h2 className='text-white text-[28px] uppercase text-center mt-4 tracking-1'>Sonraki turu <br />bekleme</h2>
            <div className='w-[250px] h-[6px] mt-6 rounded-full bg-[#2C283C]'>
                <div style={{ width: `${percent}%` }} className='h-full rounded-full bg-[#8B52EC]' />
            </div>
        </div>
    )
}
