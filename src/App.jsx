import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime,setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentTime(new Date());
    },1000)

    return ()=> clearInterval(timer);
  },[])

  const digitWithLeadingZero=(digit)=>{
    return digit < 10? `0${digit}`:digit;
  }

  const formateHour = (hour)=>{
    return hour===0?12:hour>12?hour-12:hour;
    
  }

  const formateDate = (date)=>{
    const option = { weekday: "long" , month:"long" , year:"numeric", day:"numeric"}
    return date.toLocaleDateString(undefined,option)
  }

  return (
    <>
      <div className='digitalClock-container'>
        <h1>Digital Clock</h1>
        <div className="time">{digitWithLeadingZero(formateHour(currentTime.getHours()))}
        :{digitWithLeadingZero(currentTime.getMinutes())}
        :{digitWithLeadingZero(currentTime.getSeconds())} {currentTime.getHours()>=12?"PM":"AM"}
        </div>
        <div className="date">{formateDate(currentTime)}</div>
        <p>Designed By <span>Suguna Priya</span></p>
      </div>
    </>
  )
}

export default App
