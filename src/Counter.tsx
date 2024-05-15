import clsx from 'clsx';
import React from 'react'

interface Props {
    targetTime: string
    duration: number
    handleFinish: () => void
}

export const Counter: React.FC<Props> = ({ targetTime, duration, handleFinish }) => {
    const [count, setCount] = React.useState(100);
    const [isPaused, setIsPaused] = React.useState(false);
    const [showFliedText, setShowFliedText] = React.useState(false)


    const minutes = Math.floor(count / 100);
    const seconds = count % 100;

    const targetCount = parseInt(targetTime.split('.')[0]) * 100 + parseInt(targetTime.split('.')[1]);

    React.useEffect(() => {
        if (isPaused) return;

        const incrementTime = (duration * 1000) / 300;
        const timer = setInterval(() => {
            setCount(prevCount => {
                const increment = Math.floor(Math.random() * 5) + 1; // random number between 1 and 5
                if (prevCount < targetCount) {
                    const newCount = prevCount + increment;
                    if (newCount > targetCount) {
                        return targetCount;
                    }
                    return newCount;
                } else {
                    clearInterval(timer);
                    setIsPaused(true);
                    setTimeout(() => {
                        // setIsPaused(false);
                        // setCount(1);
                        // handle end ----------------
                        setShowFliedText(true)
                        handleFinish()
                    }, 750);
                    return targetCount;
                }
            });
        }, incrementTime);

        return () => clearInterval(timer); // cleanup on unmount
    }, [isPaused])


    return <div className='text-center'>
        <h3 className='text-[#944ef5] text-[70px] font-sans font-bold'>x{`${minutes}.${seconds.toString().padStart(2, '0')}`}</h3>
        <h3 className={clsx('text-white text-[40px] font-sans font-normal transition-all duration-75', {
            'visible translate-y-[0px]': showFliedText,
            'invisible translate-y-[40px]': !showFliedText
        })}>Uçtu</h3>
    </div>
};