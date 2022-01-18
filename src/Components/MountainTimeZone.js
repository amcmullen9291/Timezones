import React from 'react'
import { useRecoilValue } from 'recoil'
import { MountainTimeState } from '../Recoil/Selectors'


export const MountainTimeZone = () => {
    const Mountain = useRecoilValue(MountainTimeState)
    return (
        <>
            <div className="digitalTime">        
                <h1>{Mountain}</h1>
            </div>
        </>
    )
}