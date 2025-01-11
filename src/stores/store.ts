import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export enum MATCH_RESULT {
  WIN = "win",
  LOSE = "lose",
  DRAW = "draw",
}

export type MatchType = {
  playerId: string
  opponentId: string
  playerName: string
  opponentName: string
  result: string
  timestamp: string
}

interface AppStateType {
  name?: string
  imgId?: string
  userId?: string
  wins: number
  loses: number
  draws: number
  matches: MatchType[]
  imgIndex: number
  setUserId: (id:string) => void
  setName: (name:string) => void
  setImgId: (imgId:string) => void
  setImgIndex: (imgIndex:number) => void
  setCurrentMatch: (id:string, name:string, result: MATCH_RESULT) => void
}

export const useStore = create<AppStateType>()(
  devtools(
    persist(
      (set) => ({
        userId: undefined,
        imgId: undefined,
        name: undefined,
        setUserId: (id:string) => set((state) => {
          return {userId: id ? id : state.userId}
        }),
        setName: (name:string) => set((state) => {
          return {name: name ? name : state.name}
        }),
        setImgId: (imgId:string) => set((state) => {
          return {imgId: imgId ? imgId : state.imgId}
        }),
        setCurrentMatch: (id:string, name: string, result: MATCH_RESULT) => set((state) => {
          const matches = [...state.matches]
          matches.push({
            playerId: state.userId ?? "--",
            opponentId: id.split("-")[0],
            timestamp: new Date().toString(),
            result,
            playerName: state.name ?? "--",
            opponentName: name,
          })
          return {matches}
        }),
        setImgIndex: (imgIndex:number) => set((state) => {
          return {imgIndex: imgIndex ? imgIndex : state.imgIndex}
        }),
        imgIndex: 0,
        wins: 0,
        loses: 0,
        draws: 0,
        currentMatch: undefined,
        matches: [],
      }),
      { name: 'atflStore' },
    ),
  ),
)
