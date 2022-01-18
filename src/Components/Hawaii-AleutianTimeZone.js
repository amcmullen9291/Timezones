import React from 'react'
import { useRecoilValue } from 'recoil'
import { HawaiiTimeState } from '../Recoil/Selectors'


export const HawaiiTimeZone = () => {
    const Hawaii = useRecoilValue(HawaiiTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{Hawaii}</h1>
            </div>
        </>
    )
}