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
  const [time, setTime] = useState('00:00');
  const [ timeZone, setTimeZone ] = useState();
  let timeOfDayEntered = "";
  const setEasternTimeZone = useSetRecoilState(easternTimeZoneState);
  const setCentralTimeZone = useSetRecoilState(centralTimeZoneState);
  const setMountainTimeZone = useSetRecoilState(mountainTimeZoneState);
  const setPacificTimeZone = useSetRecoilState(pacificTimeZoneState);
  const setAlaskaTimeZone = useSetRecoilState(alaskaTimeZoneState);
  const setHawaiiTimeZone = useSetRecoilState(hawaiiTimeZoneState);

  if(document.querySelector("#clockAreaInfo > div > div > div > div > select")){
     timeOfDayEntered = document.querySelector("#clockAreaInfo > div > div > div > div > select").value;
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
    let currentTime = time.split(':');
    let defaultTime = parseInt(currentTime[0]);

    if(e.target.value === 'CentralTimeZone'){
      currentTime[0] = parseInt(currentTime[0])+1;
      defaultTime+=1;
    }

    if(e.target.value === 'MountainTimeZone'){
      currentTime[0] = parseInt(currentTime[0])+2;
      defaultTime+=2;
    }

    if(e.target.value === 'PacificTimeZone'){
      currentTime[0] = parseInt(currentTime[0])+3;
      defaultTime+=3;
    }

    if(e.target.value === 'AlaskaTimeZone'){
      currentTime[0] = parseInt(currentTime[0])+4;
      defaultTime+=4;
    }

    if(e.target.value === 'HawaiiTimeZone'){
      currentTime[0] = parseInt(currentTime[0])+5;
      defaultTime+=5;
    }


    let EHour = parseInt(currentTime[0])
    if(EHour < 0){
      EHour +=12;
    }
    if(EHour > 12){
      EHour -=12;
    }
    let CHour = parseInt(currentTime[0])-1;
    if(CHour < 0){
      CHour +=12;
    }
    if(CHour > 12){
      CHour -=12;
    }
    let MHour = parseInt(currentTime[0])-2;
    if(MHour < 0){
      MHour +=12;
    }
    if(MHour > 12){
      MHour -=12;
    }
    let PHour = parseInt(currentTime[0])-3;
    if(PHour < 0){
      PHour +=12;
    }
    if(PHour > 12){
      PHour -=12;
    }
    let AHour = parseInt(currentTime[0])-4;
    if(AHour < 0){
      AHour +=12;
    }
    if(AHour > 12){
      AHour -=12;
    }
    let HiHour = parseInt(currentTime[0])-5;
    if(HiHour < 0){
      HiHour +=12;
    }
    if(HiHour > 12){
      HiHour -=12;
    }
  
    if(defaultTime-1 <= 0){
        CHour = parseInt(currentTime[0])+11;
    }
    if(defaultTime-2 <= 0){
      MHour = parseInt(currentTime[0])+10;
    }
    if(defaultTime-3 <= 0){
      PHour = parseInt(currentTime[0])+9;
    }
    if(defaultTime-4 <= 0){
      AHour = parseInt(currentTime[0])+8;
    }
    if(defaultTime-5 <= 0){
      HiHour = parseInt(currentTime[0])+7;
    }
  
    let eastTime = EHour+":"+hours[1];
    let time2 = CHour+":"+hours[1]; 
    let time3 = MHour+":"+hours[1];
    let time4 = PHour+":"+hours[1];
    let time5 = AHour+":"+hours[1];
    let time6 = HiHour+":"+hours[1];

    setEasternTimeZone(eastTime);
    if(eastTime.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }
    setCentralTimeZone(time2);
    if(time2.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }
    setMountainTimeZone(time3);
    if(time3.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }
    setPacificTimeZone(time4);
    if(time4.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }
    setAlaskaTimeZone(time5);
    if(time5.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }
    setHawaiiTimeZone(time6);
    if(time6.includes("12:")){
      setEasternTimeZone(eastTime+(timeOfDayEntered == 'am' ? 'pm':'am')) ;
    }

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
                <span className="output"> (Choose a time, then select a time zone.)</span><br/>
                {result} 
                <center>{timeZone}</center>
        </div>
    </div>
    </center>
    </>
  );
}