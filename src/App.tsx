import React from 'react'
import { Counter } from './Counter'
import { FireBoy } from './FireBoy'
import './index.css'
import { WaitingSection } from './WaitingSection'

const App = () => {

  const [isFinished, setIsFinished] = React.useState(false)
  const [showComplete, setShowComplete] = React.useState(false)
  const [isStarted, setIsStarted] = React.useState(false)
  const [targetTime, setTargetTime] = React.useState([] as string[])
  const [value, setValue] = React.useState('')

  const [gameCount, setGameCount] = React.useState(0)


  const handleWaitingEnd = () => {
    setIsStarted(true)
    setShowComplete(false)
    setIsFinished(false)
  }

  const handleFinish = () => {
    setIsFinished(true)
    setGameCount(gameCount + 1)
    setTimeout(() => {
      setShowComplete(true)
    }, 3000);
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
              <img src='/left4.png' className='w-[420px]' />
            </div>
          </div>
          <div className='flex items-start'>
            <div className='w-[24%] h-full border-r border-[#1B1535]'>
              <img src='/left3.png' />
            </div>

            <div className='w-[74%] h-full flex flex-col justify-between'>

              {
                !isStarted ? <div>
                  <div>{targetTime.map((item, idx) => {
                    return <div className='text-white' key={idx}>{item}</div>
                  })}</div>
                  <input value={value} onChange={(e) => setValue(e.target.value)} />
                  <button onClick={handleAdd} className='bg-white ml-2'>add</button>
                  <button onClick={handleStart} className='bg-white ml-2'>start</button>
                </div> : <>
                  {!showComplete ?
                    <div className='h-[64vh] relative flex items-end w-full overflow-hidden'>
                      <FireBoy isFinished={isFinished} />

                      <div className='absolute top-[25%] left-1/2 -translate-x-1/2'>
                        <Counter targetTime={targetTime[gameCount]} duration={30} handleFinish={handleFinish} />
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


              <div className='border-t border-[#1B1535] h-[20vh] mt-auto'>
                <img src='left5.png' />
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
