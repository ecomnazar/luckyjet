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
  const [targetTime, setTargetTime] = React.useState([] as string[])
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
              <div className='text-right mr-4'>
                <h2 className='text-[#e3e3e3]'>Denge</h2>
                <h4 className='text-white'>{balance.toFixed(2)}₺</h4>
              </div>
              <div className='bg-[#0F0C1E] p-0.5 h-[34px] flex items-center rounded-lg gap-x-1 mr-3'>
                <div className='bg-[#15122B] h-full w-8 rounded-lg flex items-center justify-center'><svg width="20" height="20" viewBox="0 0 20 20" fill="#373350" xmlns="http://www.w3.org/2000/svg"><path d="M10.8636 6.46858C10.8316 6.15909 10.7982 5.83798 10.7161 5.51756C10.4926 4.75101 9.87335 4.27277 9.2094 4.27277C8.83905 4.27141 8.37062 4.49959 8.10503 4.73052L5.90365 6.57447H4.75124C3.90311 6.57447 3.22114 7.2283 3.09236 8.1718C2.98292 9.07772 2.95623 10.7878 3.09236 11.7846C3.21047 12.7813 3.86174 13.4256 4.75124 13.4256H5.90365L8.14774 15.2969C8.37796 15.4971 8.78433 15.7266 9.15802 15.7266C9.18204 15.7273 9.20339 15.7273 9.22475 15.7273C9.90138 15.7273 10.4973 15.2313 10.7208 14.4668C10.8056 14.1416 10.8349 13.8369 10.8636 13.5424L10.8936 13.2507C11.0084 12.3045 11.0084 7.68946 10.8936 6.75006L10.8636 6.46858Z" fill="#948AC5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.6391 4.41308C14.9047 4.22452 15.2697 4.29352 15.4519 4.56339C16.4502 6.03295 17 7.96436 17 9.99961C17 12.0362 16.4502 13.967 15.4519 15.4365C15.3431 15.5971 15.1636 15.6934 14.9721 15.6934C14.8533 15.6934 14.7386 15.6565 14.6398 15.5868C14.3756 15.3976 14.3102 15.0252 14.493 14.7547C15.3565 13.4826 15.8322 11.7937 15.8322 9.99961C15.8322 8.20621 15.3565 6.51734 14.493 5.24522C14.3102 4.97536 14.3756 4.60233 14.6391 4.41308ZM12.6271 6.34626C12.8933 6.15838 13.257 6.22601 13.4405 6.49656C14.0851 7.44621 14.4408 8.69032 14.4408 10C14.4408 11.3097 14.0851 12.5538 13.4405 13.5035C13.3311 13.664 13.1522 13.7603 12.9607 13.7603C12.8419 13.7603 12.7265 13.7235 12.6277 13.6538C12.3635 13.4645 12.2981 13.0915 12.4816 12.8216C12.9921 12.0694 13.273 11.0672 13.273 10C13.273 8.93217 12.9921 7.9306 12.4816 7.1784C12.2981 6.90853 12.3635 6.5355 12.6271 6.34626Z" fill="#948AC5"></path></svg></div>
                <div className='bg-[#15122B] h-full w-8 rounded-lg flex items-center justify-center'><svg width="21" height="20" viewBox="0 0 21 20" fill="#373350" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.999 3.92554C10.9964 3.91307 10.9943 3.9007 10.9926 3.88845C10.9566 3.6266 10.7207 3.44029 10.4629 3.4554C10.201 3.47353 9.99808 3.69206 9.99808 3.95693V12.93C9.57928 12.6742 9.06353 12.5171 8.4988 12.5171C7.12146 12.5171 6 13.4205 6 14.5313C6 15.6421 7.12146 16.5455 8.4988 16.5455C9.87614 16.5455 10.9976 15.6421 10.9976 14.5313V8.66202C10.9981 8.66219 10.9985 8.66237 10.999 8.66255V3.92554Z" fill="#948AC5"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.999 8.66295V3.92596C11.0501 4.17679 11.265 4.46872 11.4564 4.72775L11.5174 4.81033C11.8569 5.27311 12.337 5.5972 12.8452 5.94022L12.8468 5.94129L12.8471 5.94149C13.5286 6.40166 14.2342 6.878 14.6449 7.72584C14.9068 8.26563 15.0277 8.83967 14.9947 9.38652C14.9428 10.2385 14.6749 11.0996 14.2711 11.7804C14.2611 11.7975 14.2501 11.8126 14.2381 11.8267C14.1241 12.014 14.0052 12.1933 13.8713 12.3463C13.6884 12.5548 13.3725 12.577 13.1666 12.3917C12.9587 12.2084 12.9387 11.8901 13.1216 11.6817C13.1743 11.621 13.2213 11.5489 13.2682 11.4771C13.2836 11.4535 13.299 11.4299 13.3145 11.4067C12.9769 9.68869 11.7498 8.95236 10.999 8.66295Z" fill="#948AC5"></path></svg></div>
              </div>
              <div className='bg-[#0F0C1E] p-0.5 h-[34px] rounded-lg inline-flex items-center gap-x-1 mr-3'>
                <div className=' bg-[#221D44] h-full rounded-lg flex items-center justify-center px-2 gap-x-2'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#928AC1" xmlns="http://www.w3.org/2000/svg"><path d="M3 10C3 13.864 6.136 17 10 17C13.864 17 17 13.864 17 10C17 6.136 13.864 3 10 3C6.136 3 3 6.136 3 10ZM9.125 14.375V14.025C9.125 13.6384 9.4384 13.325 9.825 13.325H10.175C10.5616 13.325 10.875 13.6384 10.875 14.025V14.375C10.875 14.7616 10.5616 15.075 10.175 15.075H9.825C9.4384 15.075 9.125 14.7616 9.125 14.375ZM11.519 10.119C11.1443 10.4989 10.8741 10.8285 10.7601 11.404C10.7548 11.4305 10.7498 11.461 10.7451 11.4956C10.6973 11.842 10.4013 12.1 10.0516 12.1H10C9.62979 12.1 9.32968 11.7999 9.32968 11.4297C9.32968 11.4107 9.33048 11.3917 9.33212 11.3728C9.33793 11.3045 9.34425 11.2528 9.35105 11.2177C9.45933 10.6599 9.73403 10.1593 10.119 9.769L10.987 8.887C11.246 8.635 11.4 8.285 11.4 7.9C11.4 7.13 10.77 6.5 10 6.5C9.51072 6.5 9.07797 6.75437 8.82747 7.1374C8.78315 7.20516 8.74311 7.29596 8.70735 7.4098C8.6157 7.70152 8.34531 7.9 8.03953 7.9H7.9C7.56989 7.9 7.30228 7.63239 7.30228 7.30228C7.30228 7.25785 7.30724 7.21356 7.31707 7.17023C7.3594 6.98335 7.40744 6.8323 7.4612 6.71706C7.90685 5.7617 8.8758 5.1 10 5.1C11.547 5.1 12.8 6.353 12.8 7.9C12.8 8.516 12.548 9.076 12.149 9.475L11.519 10.119Z"></path></svg>
                  <h4 className='text-white font-sans text-[12px]'>Nasil oynanir?</h4>
                </div>
                <div className='h-[60%] w-0.5 bg-[#201B3F]' />
                <div className=' bg-[#221D44] h-full rounded-lg px-1.5 flex items-center justify-center gap-x-2'>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="#928AC1" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.4975 7.46273H14.5334C13.154 7.46516 12.0365 8.55469 12.0341 9.89962C12.0322 11.2476 13.1509 12.342 14.5334 12.3438H17.5V12.5579C17.5 14.9093 16.0746 16.2997 13.6623 16.2997H7.33898C4.92612 16.2997 3.50067 14.9093 3.50067 12.5579V7.43664C3.50067 5.08529 4.92612 3.70032 7.33898 3.70032H13.6598C16.0721 3.70032 17.4975 5.08529 17.4975 7.43664V7.46273ZM6.81758 7.45771H10.7654H10.7679H10.7729C11.0684 7.4565 11.3073 7.22172 11.3061 6.93296C11.3048 6.64481 11.0634 6.41185 10.7679 6.41307H6.81758C6.52391 6.41428 6.28561 6.64663 6.28436 6.93357C6.28312 7.22172 6.52204 7.4565 6.81758 7.45771Z"></path><path opacity="0.4" d="M13.3267 10.2076C13.473 10.8734 14.0568 11.3418 14.7232 11.3297H16.9981C17.2754 11.3297 17.5003 11.1 17.5003 10.8162V9.04415C17.4997 8.7609 17.2754 8.53064 16.9981 8.53003H14.6697C13.9116 8.53247 13.2993 9.16171 13.3005 9.93716C13.3005 10.0279 13.3094 10.1187 13.3267 10.2076Z"></path><ellipse cx="14.7002" cy="9.9297" rx="0.699968" ry="0.699967"></ellipse></svg>
                  <h4 className='text-white font-sans text-[12px]'>{balance !== 0 ? balance.toFixed(2) : 0}₺</h4>
                </div>
                <div className='h-[60%] w-0.5 bg-[#201B3F]' />
                <div className='w-8 bg-[#221D44] h-full rounded-lg flex items-center justify-center'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#5A5482" xmlns="http://www.w3.org/2000/svg"><path opacity="0.4" d="M12.8527 3.00098H15.2227C16.2043 3.00098 16.9996 3.80303 16.9996 4.79286V7.18292C16.9996 8.17275 16.2043 8.9748 15.2227 8.9748H12.8527C11.8711 8.9748 11.0758 8.17275 11.0758 7.18292V4.79286C11.0758 3.80303 11.8711 3.00098 12.8527 3.00098Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M4.77687 3H7.14692C8.12846 3 8.9238 3.80205 8.9238 4.79188V7.18195C8.9238 8.17177 8.12846 8.97383 7.14692 8.97383H4.77687C3.79534 8.97383 3 8.17177 3 7.18195V4.79188C3 3.80205 3.79534 3 4.77687 3ZM4.77787 11.0262H7.14792C8.12946 11.0262 8.92479 11.8283 8.92479 12.8181V15.2082C8.92479 16.1973 8.12946 17.0001 7.14792 17.0001H4.77787C3.79633 17.0001 3.00099 16.1973 3.00099 15.2082V12.8181C3.00099 11.8283 3.79633 11.0262 4.77787 11.0262ZM15.2227 11.0262H12.8527C11.8711 11.0262 11.0758 11.8283 11.0758 12.8181V15.2082C11.0758 16.1973 11.8711 17.0001 12.8527 17.0001H15.2227C16.2043 17.0001 16.9996 16.1973 16.9996 15.2082V12.8181C16.9996 11.8283 16.2043 11.0262 15.2227 11.0262Z"></path></svg>
                </div>
              </div>
              <div className='bg-[#0F0C1E] p-0.5 w-[34px] h-[34px] rounded-lg'>
                <div className='bg-[#221D44] w-full h-full rounded-lg flex items-center justify-center'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="#5A5482" xmlns="http://www.w3.org/2000/svg"><path d="M9.81002 3.22656C10.7869 3.22656 11.7196 3.39046 12.5732 3.6882C12.2149 4.2473 12.0077 4.91144 12.0077 5.62399C12.0077 7.61008 13.6177 9.22012 15.6038 9.22012C16.1581 9.22012 16.6831 9.09472 17.152 8.87074C17.185 9.11561 17.2021 9.36592 17.2021 9.61969C17.2021 13.1505 13.8925 16.0128 9.81002 16.0128C9.1117 16.0128 8.436 15.9291 7.7956 15.7726C6.95692 16.5193 5.55687 17.1386 3.59678 17.6299C3.51221 17.6511 3.42275 17.6393 3.34663 17.5968C3.18151 17.5046 3.12238 17.296 3.21455 17.1309L3.35704 16.8718C3.9865 15.7105 4.36351 14.7713 4.48805 14.0543C3.20589 12.9061 2.41797 11.3425 2.41797 9.61969C2.41797 6.08886 5.7275 3.22656 9.81002 3.22656Z"></path><path opacity="0.4" d="M18.0014 5.62399C18.0014 4.29993 16.928 3.22656 15.604 3.22656C14.2799 3.22656 13.2065 4.29993 13.2065 5.62399C13.2065 6.94805 14.2799 8.02141 15.604 8.02141C16.928 8.02141 18.0014 6.94805 18.0014 5.62399Z"></path></svg>
                </div>
              </div>
              {/* <img src='/left4.png' className='w-[420px]' /> */}
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
