import clsx from 'clsx';
import React from 'react'
import { useTranslation } from 'react-i18next';
import endMusic from '../public/music/end.mp3'


interface Props {
    targetTime: string
    duration: number
    handleFinish: () => void
    setCoff: React.Dispatch<React.SetStateAction<string>>
    balance: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
}

export const Counter: React.FC<Props> = ({ targetTime, duration, handleFinish, setCoff, balance, setCounter }) => {
    const { t } = useTranslation()
    const [count, setCount] = React.useState(100);
    const [isPaused, setIsPaused] = React.useState(false);
    const [showFliedText, setShowFliedText] = React.useState(false)

    const minutes = Math.floor(count / 100);
    const seconds = count % 100;

    const endSong = new Audio(endMusic)


    setCoff(`${minutes}.${seconds.toString().padStart(2, '0')}`)

    const targetCount = parseInt(targetTime.split('.')[0]) * 100 + parseInt(targetTime.split('.')[1]);

    React.useEffect(() => {
        if (isPaused) return;

        const incrementTime = (duration * 1000) / 300;
        const timer = setInterval(() => {
            setCount(prevCount => {
                const increment = Math.floor(Math.random() * 5) + 1; // random number between 1 and 5
                if (prevCount < targetCount) {
                    const newCount = prevCount + increment;
                    setCounter(newCount)
                    if (newCount > targetCount) {
                        return targetCount;
                    }
                    return newCount;
                } else {
                    clearInterval(timer);
                    setIsPaused(true);
                    endSong.play()

                    setTimeout(() => {
                        // setIsPaused(false);
                        // setCount(1);
                        // handle end ----------------
                        setShowFliedText(true)
                        handleFinish()
                        // onFinish()
                    }, 750);
                    return targetCount;
                }
            });
        }, incrementTime);

        return () => clearInterval(timer); // cleanup on unmount
    }, [isPaused, balance])

    return <div className='text-center'>
        <h3 className='text-[#944ef5] text-[70px] font-sans font-bold'>x{`${minutes}.${seconds.toString().padStart(2, '0')}`}</h3>
        <h3 className={clsx('text-white text-[40px] font-sans font-normal transition-all duration-75', {
            'visible translate-y-[0px]': showFliedText,
            'invisible translate-y-[40px]': !showFliedText
        })}>{t('uctu')}</h3>
    </div>
};