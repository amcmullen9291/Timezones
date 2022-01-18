import { 
    easternTimeZoneState, 
    centralTimeZoneState, 
    mountainTimeZoneState, 
    pacificTimeZoneState, 
    alaskaTimeZoneState, 
    hawaiiTimeZoneState,
    UserInput,
} from './Atoms';

import { selector } from 'recoil'

export const EasternTimeState = selector({
    key: 'currentEasternTime',
    get: ({ get }) => {
        const  eastcoastTime = get(easternTimeZoneState)
        return eastcoastTime;
    },
})

export const CentralTimeState = selector({
    key: 'currentCentralTime',
    get: ({ get }) => {
        const  centralTime = get(centralTimeZoneState)
        return centralTime;
    },
})

export const MountainTimeState = selector({
    key: 'currentMountainTime',
    get: ({ get }) => {
        const  mountainTime = get(mountainTimeZoneState)
        return mountainTime;
    },
})

export const PacificTimeState = selector({
    key: 'currentPacificTime',
    get: ({ get }) => {
        const  pacificTime = get(pacificTimeZoneState)
        return pacificTime;
    },
})

export const AlaskaTimeState = selector({
    key: 'currentAlaskaTime',
    get: ({ get }) => {
        const  alaskaTime = get(alaskaTimeZoneState)
        return alaskaTime;
    },
})

export const HawaiiTimeState = selector({
    key: 'currentHawaiiTime',
    get: ({ get }) => {
        const  hawaiiTime = get(hawaiiTimeZoneState)
        return hawaiiTime;
    },
})

export const UserTimeInput = selector({
    key: 'enteredTimeInput',
    get: ({ get }) => {
        const  enteredTime = get(UserInput)
        return enteredTime;
    },
})
