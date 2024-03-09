import {create} from 'zustand'

export const useSize = create((get,set) => ({
    size: window.innerWidth,
    arr: [],
    isActive: false,
    setIsActive: () =>{
      const {isActive}  = get();
    },
    pos: (position)=> [...this.arr,position]
}))