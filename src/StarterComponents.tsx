import React from 'react'
import { useTranslation } from 'react-i18next'
import longMusic from '../public/music/longMusic.mp3'

interface Props {
    targetTime: string[]
    value: string
    setValue: (value: React.SetStateAction<string>) => void
    handleAdd: () => void
    handleStart: () => void
    setBalance: (value: React.SetStateAction<number>) => void
}

export const StarterComponents: React.FC<Props> = ({ setValue, targetTime, value, handleAdd, handleStart, setBalance }) => {
    const { i18n } = useTranslation()
    const audio = new Audio(longMusic)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        handleAdd()
    }

    const onStart = (lang: string) => {
        i18n.changeLanguage(lang)
        audio.play();
        handleStart()
        audio.addEventListener('ended', () => {
            audio.play()
        })
    }

    return (
        <div className='w-screen h-screen bg-gray-200 flex flex-col items-center justify-center'>
            <h2 className='text-[36px] mb-12'>LuckyJet Admin</h2>
            <div className='flex space-x-12'>
                <div className='flex items-start gap-x-8'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='Coefficiente' value={value} onChange={(e) => setValue(e.target.value)} className='rounded-md p-2' />
                            <button type='submit' className='bg-white ml-2 p-2 rounded-md'>Add coefficente</button>
                        </form>
                        <div>
                            <input placeholder='balance' className='mt-2 w-full rounded-md p-2' onChange={(e) => setBalance(Number(e.target.value))} />
                        </div>
                        <div className=''>
                            <button onClick={() => onStart('tr')} className='bg-white mt-2 rounded-md p-2 w-full'>START (TURKEY)</button>
                            <button onClick={() => onStart('es')} className='bg-white mt-2 rounded-md p-2 w-full'>START (SPAIN)</button>
                            <button onClick={() => onStart('pt')} className='bg-white mt-2 rounded-md p-2 w-full'>START (PORTUGAL)</button>
                            <button onClick={() => onStart('uz')} className='bg-white mt-2 rounded-md p-2 w-full'>START (UZBEK)</button>
                            <button onClick={() => onStart('fr')} className='bg-white mt-2 rounded-md p-2 w-full'>START (FRANCY)</button>
                            <button onClick={() => onStart('en')} className='bg-white mt-2 rounded-md p-2 w-full'>START (ENGLISH $)</button>
                            <button onClick={() => onStart('enphp')} className='bg-white mt-2 rounded-md p-2 w-full'>START (ENGLISH PHP)</button>

                        </div>
                    </div>
                    <div className='h-[500px] overflow-scroll'>
                        <h3>Coefficentes list:</h3>
                        {targetTime.map((item, idx) => {
                            return <div className='text-black' key={idx}>{item}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
