import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import {  useSetRecoilState} from 'recoil';
import { easternTimeZoneState } from '../Recoil/Atoms';
import { centralTimeZoneState } from '../Recoil/Atoms';
import { mountainTimeZoneState } from '../Recoil/Atoms';
import { pacificTimeZoneState } from '../Recoil/Atoms';
import { alaskaTimeZoneState } from '../Recoil/Atoms';
import { hawaiiTimeZoneState } from '../Recoil/Atoms';


export default function UserInput() {
  const [time, setTime] = useState('10:00');
  const [ timeZone, setTimeZone ] = useState();

  const setEasternTimeZone = useSetRecoilState(easternTimeZoneState);
  const setCentralTimeZone = useSetRecoilState(centralTimeZoneState);
  const setMountainTimeZone = useSetRecoilState(mountainTimeZoneState);
  const setPacificTimeZone = useSetRecoilState(pacificTimeZoneState);
  const setAlaskaTimeZone = useSetRecoilState(alaskaTimeZoneState);
  const setHawaiiTimeZone = useSetRecoilState(hawaiiTimeZoneState);

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
  const zone = e.target;
  setTimeZone(e.target.value);
    setEasternTimeZone(time);
  const currentTime = time.split(':');
  const defaultTime = parseInt(currentTime[0]);
  let CHour = parseInt(currentTime[0])-1;
  let MHour = parseInt(currentTime[0])-2;
  let PHour = parseInt(currentTime[0])-3;
  let AHour = parseInt(currentTime[0])-4;
  let HiHour = parseInt(currentTime[0])-5;

  if(defaultTime-1 <= 0){
      CHour = parseInt(currentTime[0])+11;
  }
  if(defaultTime-2 <= 0){
    MHour = parseInt(currentTime[0])+10;
  }
  if(defaultTime-2 <= 0){
    PHour = parseInt(currentTime[0])+9;
  }
  if(defaultTime-2 <= 0){
    AHour = parseInt(currentTime[0])+8;
  }
  if(defaultTime-2 <= 0){
    HiHour = parseInt(currentTime[0])+7;
  }

  let time2 = CHour+":"+hours[1];
  let time3 = MHour+":"+hours[1];
  let time4 = PHour+":"+hours[1];
  let time5 = AHour+":"+hours[1];
  let time6 = HiHour+":"+hours[1];
  //@ return to 12hr

  setCentralTimeZone(time2);
  setMountainTimeZone(time3);
  setPacificTimeZone(time4);
  setAlaskaTimeZone(time5);
  setHawaiiTimeZone(time6);
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
                <span className="output"> (Select a time, then time zone.)</span><br/>
                {result} 
                <center>{timeZone}</center>
        </div>
    </div>
    </center>
    </>
  );
}

