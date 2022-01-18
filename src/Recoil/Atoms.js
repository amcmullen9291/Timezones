import { atom } from 'recoil'

export const easternTimeZoneState = atom({
    key: 'easternTimeZone',
    default: "00:00",
})

export const centralTimeZoneState = atom({
    key: 'centralTimeZone',
    default: "00:00",
})

export const mountainTimeZoneState = atom({
    key: 'mountainTimeZone',
    default: "00:00",
})

export const pacificTimeZoneState = atom({
    key: 'pacificTimeZone',
    default: "00:00",
})

export const alaskaTimeZoneState = atom({
    key: 'alaskaTimeZone',
    default: "00:00",
})

export const hawaiiTimeZoneState = atom({
    key: 'hawaiiTimeZone',
    default: "00:00",
})

export const UserInput = atom ({
    key: 'UserTimeInput',
    default: "06:00",
})