import React from 'react'
import { useRecoilValue } from 'recoil'
import { CentralTimeState } from '../Recoil/Selectors'


export const CentralTimeZone = () => {
    const Central = useRecoilValue(CentralTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{Central}</h1>
            </div>
        </>
    )
}