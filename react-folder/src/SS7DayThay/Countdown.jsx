import { useState, useEffect } from "react";
import "./Countdown.css";
import _ from "lodash";


function Countdown({ targetDate }) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    // Hàm này sẽ chạy 1 lần đầu tiên và mỗi khi giá trị trong dependency thay đổi

    // Bản chất lifecycle đang chạy useEffect 
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
      _.flatten([1,[2,3]])
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  // useEffect(() => {
    // TODO: Hàm bên trong sẽ được đi gọi lại liên tục 
  //   console.log("Hello")
  // })

  useEffect(() => {
    // TODO: Hàm bên trong sẽ chỉ chạy 1 lần duy nhất 
    console.log("Test")
  }, [])

  function calculateRemainingTime() {
    const difference = +new Date(targetDate) - +new Date();

    if (difference > 0) {
      const remaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      return remaining;
    } 

    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
}

export default Countdown;