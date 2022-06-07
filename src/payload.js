import { Decrement, Increment } from "./action.types"




export const Add=(value)=>({type:Increment,payload:value,})
export const sub=(value)=>({type:Decrement,payload:value,})