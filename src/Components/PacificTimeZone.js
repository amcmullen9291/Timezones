import React from 'react'
import { useRecoilValue } from 'recoil'
import { PacificTimeState } from '../Recoil/Selectors'


export const PacificTimeZone = () => {
    const Pacific = useRecoilValue(PacificTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{Pacific}</h1>
            </div>
        </>
    )
}