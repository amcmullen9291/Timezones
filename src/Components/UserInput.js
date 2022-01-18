import React, { useState } from 'react';
import TimePicker from 'react-time-picker';

export default function UserInput() {
  const [time, setTime] = useState('10:00');

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
            <span id="report">If it is {time} in New York...</span>
        </div>
    </div>
    </center>
    </>
  );
}