import React from 'react';
import { useState, useEffect } from 'react';
// import { useRecoilValue } from 'recoil'
// import { UserTimeInput } from '../Recoil/Selectors'

function UserInputClock(){
    const [date, setDate] = useState(new Date());
    
    function refreshClock() {
      setDate(new Date());
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      return function cleanup() {
        clearInterval(timerId);
      };
    }, []);
    return (
        <>
        <div className="UserInputClock">
            <span>Current Time</span><br/>
            <span>
                {date.toLocaleTimeString()}
            </span>
        </div>
      </>
    );
  }
  export default UserInputClock;