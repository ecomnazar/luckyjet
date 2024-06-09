/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'

interface Props {
    targetTime: string[]
    value: string
    setValue: (value: React.SetStateAction<string>) => void
    handleAdd: () => void
    handleStart: () => void
    setBalance: (value: React.SetStateAction<number>) => void
    betHistory: number
    historyBets: number[]
    setBetHistory: React.Dispatch<React.SetStateAction<number>>

    setHistoryBets: (value: React.SetStateAction<number[]>) => void
}

export const StarterComponents: React.FC<Props> = ({ setValue, targetTime, value, handleAdd, handleStart, setBalance, betHistory, historyBets, setHistoryBets, setBetHistory }) => {

    return (
        <div className='mt-24 flex space-x-12'>
            <div><div>{targetTime.map((item, idx) => {
                return <div className='text-white' key={idx}>{item}</div>
            })}</div>
                <input placeholder='Coefficiente' value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={handleAdd} className='bg-white ml-2'>add</button>
                <div>
                    <input placeholder='balance' className='mt-2' onChange={(e) => setBalance(Number(e.target.value))} />
                </div>
                <button onClick={handleStart} className='bg-white mt-2'>start</button>
            </div>
            <div>
                <h2 className='text-white'>History bets</h2>
                {/* @ts-ignore */}
                <input value={betHistory} onChange={(e) => setBetHistory(e.target.value)} placeholder='Bets history' />
                <button onClick={() => setHistoryBets([betHistory, ...historyBets])} className='bg-white ml-2'>add</button>
            </div>
        </div>
    )
}
