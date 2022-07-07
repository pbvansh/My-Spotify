import { atom } from "recoil";

export const currentTrackIdAtom = atom({
    key : "currentTrackIdAtom",
    default : null,
})

export const isPlayingAtom = atom({
    key: "isPlayingAtom",
    default : false,
})