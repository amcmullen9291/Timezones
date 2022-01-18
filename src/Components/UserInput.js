import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function UserInput() {
  const [time, setTime] = useState('10:00');
  const timeOfDay = document.querySelector("#clockAreaInfo > div > div > div > div > select").value;

  const hours = time.split(':');
  if(hours[0]>12){
    hours[0]-=12;
    const newTime = hours[0]+":"+hours[1];
    setTime(newTime);
  }
  
  return (
      <>
      <center>
      <div id="userInputClockArea">
        <div id="clockAreaInfo">
            <span>Enter a Time.</span>
                <div>
                    <TimePicker
                        onChange={setTime}
                        value={time}
                    />
                </div>
                <br/>
            <span id="report">If it is {time}{timeOfDay}, in New York...</span>
        </div>
    </div>
    </center>
    </>
  );
}

