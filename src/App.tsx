/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Counter } from './Counter'
import { FireBoy } from './FireBoy'
import './index.css'
import { WaitingSection } from './WaitingSection'
import { BetSelector } from './BetSelector'
import clsx from 'clsx'

const App = () => {

  const [balance, setBalance] = React.useState(0)

  const [isFinished, setIsFinished] = React.useState(false)
  const [showComplete, setShowComplete] = React.useState(false)
  const [isStarted, setIsStarted] = React.useState(false)
  const [targetTime, setTargetTime] = React.useState([] as string[])
  // const [targetTime, setTargetTime] = React.useState([] as string[])
  const [value, setValue] = React.useState('')

  const [gameCount, setGameCount] = React.useState(0)

  // const [firstBetStoppedValue, setFirstBetStoppedValue] = React.useState(0)
  // const [secondBetStoppedValue, setSecondBetStoppedValue] = React.useState(0)
  const [historyBets, setHistoryBets] = React.useState([] as number[])

  const [coff, setCoff] = React.useState('')
  const [firstValue, setFirstValue] = React.useState('0.2 $')
  const [secondValue, setSecondValue] = React.useState('0.2 $')
  const [isFirstBetStarted, setIsFirstBetStarted] = React.useState(false)
  const [isSecondBetStarted, setIsSecondBetStarted] = React.useState(false)
  // const [showWaiting, setShowWaiting] = React.useState(false)
  const [showWinningBetAmount, setShowWinningBetAmount] = React.useState(false)
  const [betHistory, setBetHistory] = React.useState(0)

  const handleWaitingEnd = () => {
    if (isFirstBetStarted || isSecondBetStarted) {
      setShowWinningBetAmount(true)
    }
    if (showWinningBetAmount) {
      setShowWinningBetAmount(false)
      setIsFirstBetStarted(false)
      setIsSecondBetStarted(false)
    }
    setIsStarted(true)
    setShowComplete(false)
    setIsFinished(false)
  }



  const handleFinish = () => {

    // if (firstValue !== '0.2 $' && isFirstBetStarted) {
    //   if (firstBetStoppedValue === 0) {
    //     setBalance((prev) => prev + (Number(coff) * Number(firstValue.slice(0, -1))))
    //   } else {
    //     setBalance((prev) => prev + firstBetStoppedValue)
    //   }
    // }
    // if (secondValue !== '0.2 $' && isSecondBetStarted) {
    //   if (secondBetStoppedValue === 0) {
    //     setBalance((prev) => prev + (Number(coff) * Number(secondValue.slice(0, -1))))
    //   } else {
    //     setBalance((prev) => prev + secondBetStoppedValue)
    //   }
    //   // setBalance((prev) => prev + (Number(coff) * Number(secondValue.slice(0, -1))))
    // }

    setHistoryBets([Number(targetTime[gameCount]), ...historyBets])
    setIsFinished(true)
    setGameCount(gameCount + 1)
    setTimeout(() => {
      setShowComplete(true)
    }, 3000);
  }

  const handleStop = (number: '1' | '2') => {
    if (number === '1') {
      setIsFirstBetStarted(false)
      setBalance((prev) => prev + (Number(coff) * Number(firstValue.slice(0, -1))))
    } else {
      setIsSecondBetStarted(false)
      setBalance((prev) => prev + (Number(coff) * Number(secondValue.slice(0, -1))))
    }
  }

  const handleAdd = () => {
    const val = Number(value).toFixed(2).toString()
    if (targetTime.length === 0) {
      setTargetTime([val])
    } else {
      setTargetTime([...targetTime, val])
    }
    setValue('')
  }

  const handleStart = () => {
    setIsStarted(true)
  }

  // const handleStopCoff = () => {
  //   setTargetTime((prevTargetTime) => {
  //     const newTargetTime = [...prevTargetTime]
  //     newTargetTime[gameCount] = '1.00'
  //     return newTargetTime
  //   })
  // }

  return (
    <div className='w-screen h-screen bg-[#0A0F1D]'>
      <img className='w-full' src='/header.jpeg' />
      <div className='flex items-start justify-between h-[88vh]'>
        <div className='w-[16%] overflow-y-scroll bg-[#151B2E] h-full rounded-[14px] ml-4'>
          <img src='/left.png' className='w-full object-cover' />
        </div>
        <div className='bg-[#141026] w-[83%] mr-4 h-[88vh] overflow-hidden ml-4'>
          <div className='flex items-start'>
            <div className='flex items-center justify-center w-[24%] h-[70px] border-b border-r border-[#1B1535]'>
              <img src='/lucky.png' className='w-[150px]' />
            </div>
            <div className='w-[74%] border-b border-[#1B1535] h-[70px] flex items-center justify-end'>
              <div className='text-right'>
                <h2 className='text-[#e3e3e3]'>Баланс</h2>
                <h4 className='text-white'>{balance}$</h4>
              </div>
              <img src='/left4.png' className='w-[420px]' />
            </div>
          </div>
          <div className='flex items-start'>
            <div className='w-[24%] h-full border-r border-[#1B1535]'>
              <img src='/left3.png' />
            </div>

            <div className='w-[74%] relative h-full flex flex-col justify-between'>
              <div className='flex items-center absolute w-full top-0 left-0 p-3 space-x-2 overflow-scroll'>
                {historyBets.map((item, idx) => {
                  return <div className={clsx('text-white font-semibold rounded-md font-sans text-[13px] py-2 px-3', {
                    'bg-[#8351D4]': idx % 2 === 0,
                    'bg-[#5974DE]': idx % 2 !== 0
                  })}>
                    {item}x
                  </div>
                })}
              </div>
              {
                !isStarted ? <div className='mt-24 flex space-x-12'>
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
                </div> : <>
                  {!showComplete ?
                    <div className='h-[64vh] relative flex items-end w-full overflow-hidden'>
                      <FireBoy isFinished={isFinished} />

                      <div className='absolute top-[25%] left-1/2 -translate-x-1/2'>

                        <Counter targetTime={targetTime[gameCount]} duration={30} handleFinish={handleFinish} setCoff={setCoff} />

                      </div>

                      <div className='flex items-center clouds'>
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                        <img src='/clouds-bg.svg' />
                      </div>
                    </div> :
                    <WaitingSection handleWaitingEnd={handleWaitingEnd} />
                  }
                </>
              }



              {/* <BekleyenSection /> */}

              <div className='flex items-center gap-x-2 mt-4'>
                <BetSelector coff={coff} showWinningBetAmount={showWinningBetAmount} value={firstValue} setValue={setFirstValue} setIsBetStarted={setIsFirstBetStarted} isBetStarted={isFirstBetStarted} showComplete={showComplete} handleStop={handleStop} index='1' />
                <BetSelector coff={coff} showWinningBetAmount={showWinningBetAmount} value={secondValue} setValue={setSecondValue} setIsBetStarted={setIsSecondBetStarted} isBetStarted={isSecondBetStarted} showComplete={showComplete} handleStop={handleStop} index='2' />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='h-full w-full bg-[#141026] ml-4 flex items-start'> */}
        {/* <img className='w-[23%]' src='/left1.png' /> */}
        {/* <img className='w-[77%]' src='/left2.png' /> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default App
