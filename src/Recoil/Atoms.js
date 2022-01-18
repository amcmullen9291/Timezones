import { atom } from 'recoil'

export const easternTimeZone = atom({
    key: 'easternTimeZone',
    default: "12:00",
})

export const centralTimeZone = atom({
    key: 'centralTimeZone',
    default: "12:00",
})

export const mountainTimeZone = atom({
    key: 'mountainTimeZone',
    default: "12:00",
})

export const pacificTimeZone = atom({
    key: 'pacificTimeZone',
    default: "12:00",
})

export const alaskaTimeZone = atom({
    key: 'alaskaTimeZone',
    default: "12:00",
})

export const hawaiiTimeZone = atom({
    key: 'hawaiiTimeZone',
    default: "12:00",
})

export const UserInput = atom ({
    key: 'UserTimeInput',
    default: "06:00",
})