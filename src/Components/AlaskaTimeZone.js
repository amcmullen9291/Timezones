import React from 'react'
import { useRecoilValue } from 'recoil'
import { AlaskaTimeState } from '../Recoil/Selectors'


export const AlaskaTimeZone = () => {
    const Alaska = useRecoilValue(AlaskaTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{Alaska}</h1>
            </div>
        </>
    )
}