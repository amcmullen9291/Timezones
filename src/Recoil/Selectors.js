import { 
    easternTimeZone, 
    centralTimeZone, 
    mountainTimeZone, 
    pacificTimeZone, 
    alaskaTimeZone, 
    hawaiiTimeZone,
} from './Atoms';

import { selector } from 'recoil'

export const EasternTimeState = selector({
    key: 'currentEasternTime',
    get: ({ get }) => {
        const  eastcoastTime = get(easternTimeZone)
        return eastcoastTime;
    },
})

export const CentralTimeState = selector({
    key: 'currentCentralTime',
    get: ({ get }) => {
        const  centralTime = get(centralTimeZone)
        return centralTime;
    },
})

export const MountainTimeState = selector({
    key: 'currentMountainTime',
    get: ({ get }) => {
        const  mountainTime = get(mountainTimeZone)
        return mountainTime;
    },
})

export const PacificTimeState = selector({
    key: 'currentPacificTime',
    get: ({ get }) => {
        const  pacificTime = get(pacificTimeZone)
        return pacificTime;
    },
})

export const AlaskaTimeState = selector({
    key: 'currentAlaskaTime',
    get: ({ get }) => {
        const  alaskaTime = get(alaskaTimeZone)
        return alaskaTime;
    },
})

export const HawaiiTimeState = selector({
    key: 'currentHawaiiTime',
    get: ({ get }) => {
        const  hawaiiTime = get(hawaiiTimeZone)
        return hawaiiTime;
    },
})

