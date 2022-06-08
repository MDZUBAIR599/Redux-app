import {reducer} from "./reducer"
import {legacy_createStore} from "redux"


let initialState={
    counter:0,
}
export const store= legacy_createStore(reducer,initialState);