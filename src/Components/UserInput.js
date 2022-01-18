import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import {  useSetRecoilState} from 'recoil';
import { easternTimeZoneState, setEasternTimeZoneState } from '../Recoil/Atoms';


export default function UserInput() {
  const [time, setTime] = useState('10:00');
  const [ timeZone, setTimeZone ] = useState();

  const setEasternTimeZone = useSetRecoilState(easternTimeZoneState);

  if(document.querySelector("#clockAreaInfo > div > div > div > div > select")){
    const timeOfDayEntered = document.querySelector("#clockAreaInfo > div > div > div > div > select").value;
    var result = (
        <span id="report">If it is <u>{time} {timeOfDayEntered}</u> in the </span>
        )
    }

  const hours = time.split(':');
  if(hours[0] == '00'){
    hours[0]=12;
    const newTime = hours[0]+":"+hours[1];
    setTime(newTime);
  }

  if(hours[0]>12 && hours[0] != 0){
    hours[0]-=12;
    const newTime = hours[0]+":"+hours[1];
    setTime(newTime);
  }

function setUserTimeZone(e){
  e.preventDefault();
  setTimeZone(e.target.value);
  setEasternTimeZone(time);
}
  return (
      <>
      <center>
      <div id="userInputClockArea">
        <div id="clockAreaInfo">
            <span>Enter a Time.</span><br/>
                <div>
                    <TimePicker
                        onChange={setTime}
                        value={time}
                    />
                    <select id="select1" onChange={(e) => {setUserTimeZone(e)}}>
                        <option value="EasternTimeZone">Eastern Time</option>
                        <option value="CentralTimeZone">Central Time</option>
                        <option value="MountainTimeZone">Mountain Time</option>
                        <option value="PacificTimeZone">Pacific Time</option>
                        <option value="AlaskaTimeZone">Alaska Time Zone</option>
                        <option value="HawaiiTimeZone">Hawaii-Aleutian Time</option>
                    </select>
                </div>
                <br/>
                <span className="output"> (Select a time zone first.)</span><br/>
                {result} 
                <center>{timeZone}</center>
        </div>
    </div>
    </center>
    </>
  );
}

