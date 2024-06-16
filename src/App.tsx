/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Counter } from './Counter'
import { FireBoy } from './FireBoy'
import './index.css'
import { WaitingSection } from './WaitingSection'
import { BetSelector } from './BetSelector'
import { generateRandomFloatArray } from './generateRandomFloatArray'
import { BottomClouds } from './BottomClouds'
import { HistoryBetFull } from './HistoryBetFull'
import { StarterComponents } from './StarterComponents'
import { HistoryBetsShort } from './HistoryBetsShort'
import { WinPopup } from './WinPopup'
import { getAccessToken } from './localstorage'
import { useNavigate } from 'react-router-dom'
import { randomUsers } from './users'
import clsx from 'clsx'
import { Line } from './Line'


const App = () => {
  const navigate = useNavigate()
  const [balance, setBalance] = React.useState(0)
  const [isFinished, setIsFinished] = React.useState(false)
  const [showComplete, setShowComplete] = React.useState(false)
  const [isStarted, setIsStarted] = React.useState(false)
  const [targetTime, setTargetTime] = React.useState(['2.55', '2.55', '2.55', '2.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55', '5.55'] as string[])
  const [value, setValue] = React.useState('')
  const [gameCount, setGameCount] = React.useState(0)
  const [historyBets, setHistoryBets] = React.useState([] as number[])

  const [coff, setCoff] = React.useState('')
  const [firstValue, setFirstValue] = React.useState('0.2 ₺')
  const [secondValue, setSecondValue] = React.useState('0.2 ₺')
  const [isFirstBetStarted, setIsFirstBetStarted] = React.useState(false)
  const [isSecondBetStarted, setIsSecondBetStarted] = React.useState(false)
  const [showWinningBetAmount, setShowWinningBetAmount] = React.useState(false)

  const [showFirstWinPopup, setShowFirstWinPopup] = React.useState({ show: false, amount: 0, coff: 0 })
  const [showSecondWinPopup, setShowSecondWinPopup] = React.useState({ show: false, amount: 0, coff: 0 })

  const [historyBetFull, setHistoryBetFull] = React.useState(false)

  const [users, setUsers] = React.useState(randomUsers())
  const [counter, setCounter] = React.useState(0)

  const [totalBahis, setTotalBahis] = React.useState(Math.floor(Math.random() * 300) + 300)

  const handleWaitingEnd = () => {
    if (isFirstBetStarted || isSecondBetStarted) {
      setShowWinningBetAmount(true)
    }
    console.log(isFirstBetStarted);

    if (showWinningBetAmount) {
      // setShowWinningBetAmount(false)
      // setIsFirstBetStarted(false)
      // setIsSecondBetStarted(false)
    }
    setIsStarted(true)
    setShowComplete(false)
    setIsFinished(false)
  }

  const handleFinish = () => {
    const sliced = Number(firstValue.slice(0, -1))

    if (firstValue !== '0.2 ₺' && isFirstBetStarted) {
      setBalance((prev) => prev - sliced)
      setIsFirstBetStarted(false)
    }
    if (secondValue !== '0.2 ₺' && isSecondBetStarted) {
      setBalance((prev) => prev - sliced)
      setIsSecondBetStarted(false)


    }

    setShowWinningBetAmount(false)
    setHistoryBets([Number(targetTime[gameCount]), ...historyBets])
    setIsFinished(true)
    setGameCount(gameCount + 1)

    setTimeout(() => {
      setUsers(randomUsers())
      setShowComplete(true)
      setCounter(0)
      setTotalBahis(Math.floor(Math.random() * 300) + 300)
    }, 3000);
  }

  const handleStop = (number: '1' | '2') => {
    const sliced = Number(firstValue.slice(0, -1))
    if (number === '1') {
      setIsFirstBetStarted(false)
      setBalance((prev) => prev + (Number(coff) * sliced))
      setShowFirstWinPopup({ show: true, amount: sliced, coff: Number(coff) })
      const timer = setTimeout(() => {
        setShowFirstWinPopup({ show: false, amount: 0, coff: 0 })
        clearTimeout(timer)
      }, 4000);
    } else {
      setIsSecondBetStarted(false)
      setBalance((prev) => prev + (Number(coff) * sliced))
      setShowSecondWinPopup({ show: true, amount: sliced, coff: Number(coff) })
      const timer = setTimeout(() => {
        setShowSecondWinPopup({ show: false, amount: 0, coff: 0 })
        clearTimeout(timer)
      }, 4000);
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
    setTargetTime([...targetTime, '2.45'])
  }

  React.useEffect(() => {
    const randomBetsHistory = generateRandomFloatArray(80, 1, 20)
    setHistoryBets(randomBetsHistory)
  }, [])

  React.useEffect(() => {
    const token = getAccessToken()
    if (!token) navigate('/login')
  }, [])


  if (!isStarted) {
    return <StarterComponents
      handleAdd={handleAdd}
      handleStart={handleStart}
      setBalance={setBalance}
      setValue={setValue}
      targetTime={targetTime}
      value={value}
    />
  }


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
                <h4 className='text-white'>{balance.toFixed(2)}₺</h4>
              </div>
              <img src='/left4.png' className='w-[420px]' />
            </div>
          </div>
          <div className='flex items-start'>


            <div className='w-[24%] h-full border-r border-[#1B1535] py-2 px-4'>
              {/* <img src='/left3.png' /> */}
              <div className='bg-[#100D20] flex items-center justify-between rounded-[10px] p-0.5'>
                <div className='basis-[32%] py-1.5 text-[13px] bg-[#221D44] font-sans text-white flex rounded-[10px] items-center justify-center'>Hepsi</div>
                <div className='basis-[32%] py-1.5 text-[13px] text-[#928AC1] font-sans flex rounded-[10px] items-center justify-center'>Benim</div>
                <div className='basis-[32%] py-1.5 text-[13px] text-[#928AC1] font-sans flex rounded-[10px] items-center justify-center'>En iyi</div>
              </div>

              <div className='flex items-center justify-between mt-4 mb-4'>
                <div>
                  <h4 className='text-[#78798A] font-sans text-[12px]'>Toplam bahis: </h4>
                  <h3 className='text-white text-[16px]'>{totalBahis}</h3>
                </div>
                <div className='bg-[#100D20] text-white p-0.5 rounded-[10px]'>
                  <div className='rounded-[10px] bg-[#221D44] py-1.5 text-[13px] font-sans px-4'>
                    <h4>Önceki tur</h4>
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
                    <h5 className='text-white font-sans text-[10px]'>{user.amount} ₺</h5>
                    <div className={clsx('basis-[20%] flex items-center justify-center rounded-[7px] font-sans text-[10px] text-white py-1.5', {
                      'bg-[#6E41BB]': isFinished && !showComplete,
                    })}>{isFinished && !showComplete ? (user.finishedCoff / 10).toFixed(2) : '-'}</div>
                    <h5 className={clsx('ml-2 font-sans text-[10px] basis-[15%] mr-2', {
                      'text-[#F3BE62]': isFinished && !showComplete,
                      'text-white text-right': !(isFinished && !showComplete)
                    })}> {isFinished && !showComplete ? `${(user.amount * user.finishedCoff / 10).toFixed(2)} ₺` : '-'}</h5>
                  </div>
                })}

              </div>

            </div>




            <div className='w-[74%] relative h-full flex flex-col justify-between'>

              <HistoryBetsShort historyBets={historyBets} setHistoryBetFull={setHistoryBetFull} />

              {historyBetFull && <HistoryBetFull historyBets={historyBets} setHistoryBetFull={setHistoryBetFull} />}

              <WinPopup firstWinPopup={showFirstWinPopup} secondWinPopup={showSecondWinPopup} />

              <>
                {!showComplete ?
                  <div className='h-[64vh] relative flex items-end w-full overflow-hidden'>
                    <FireBoy isFinished={isFinished} />

                    <Line isFinished={isFinished} />


                    <div className='absolute top-[25%] left-1/2 -translate-x-1/2'>
                      <Counter setCounter={setCounter} balance={balance} targetTime={targetTime[gameCount]} duration={30} handleFinish={handleFinish} setCoff={setCoff} />
                    </div>
                    <BottomClouds />
                  </div> :
                  <WaitingSection handleWaitingEnd={handleWaitingEnd} isFirstBetStarted={isFirstBetStarted} isSecondBetStarted={isSecondBetStarted} />
                }
              </>



              {/* <BekleyenSection /> */}

              <div className='flex items-center gap-x-2 mt-4'>
                <BetSelector coff={coff} showWinningBetAmount={showWinningBetAmount} value={firstValue} setValue={setFirstValue} setIsBetStarted={setIsFirstBetStarted} isBetStarted={isFirstBetStarted} showComplete={showComplete} handleStop={handleStop} index='1' />
                <BetSelector coff={coff} showWinningBetAmount={showWinningBetAmount} value={secondValue} setValue={setSecondValue} setIsBetStarted={setIsSecondBetStarted} isBetStarted={isSecondBetStarted} showComplete={showComplete} handleStop={handleStop} index='2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
