import React from 'react'

interface Props {
    targetTime: string[]
    value: string
    setValue: (value: React.SetStateAction<string>) => void
    handleAdd: () => void
    handleStart: () => void
    setBalance: (value: React.SetStateAction<number>) => void
}

export const StarterComponents: React.FC<Props> = ({ setValue, targetTime, value, handleAdd, handleStart, setBalance }) => {

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        handleAdd()
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
                        <button onClick={handleStart} className='bg-white mt-2 rounded-md p-2 w-full'>Start Game!</button>
                    </div>
                    <div>
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
