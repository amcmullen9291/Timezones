import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function UserInput() {
  const [time, setTime] = useState('10:00');

  if(document.querySelector("#clockAreaInfo > div > div > div > div > select")){
    const timeOfDayEntered = document.querySelector("#clockAreaInfo > div > div > div > div > select").value;
    var result = (
        <span id="report">If it is <u>{time} {timeOfDayEntered}</u>, in New York...</span>
        )
    }

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
                {result}
        </div>
    </div>
    </center>
    </>
  );
}

