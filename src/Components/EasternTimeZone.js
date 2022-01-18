import React from 'react'
import { useRecoilValue } from 'recoil'
import { EasternTimeState } from '../Recoil/Selectors'


export const EasternTimeZone = () => {
    const EastCoast = useRecoilValue(EasternTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{EastCoast}</h1>
            </div>
        </>
    )
}