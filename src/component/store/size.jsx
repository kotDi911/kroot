import {create} from 'zustand'

export const useSize = create(() => ({
    size: window.innerWidth,
    arr: [],
    pos: (position)=> [...this.arr,position]
}))