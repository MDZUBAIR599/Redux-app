import { Decrement, Divide, Increment, Multiply } from "./action.types";



export const reducer =(state, {type, payload})=>{
    switch(type){
        case Increment:{
            return {counter:state.counter+1}
        }case Decrement:{
            return {counter:state.counter-1}
        }
        
        case Multiply:{
            return {counter:state.counter*state.counter}
        }
        case Divide:{
            return {counter:state.counter/state.counter}
        }
        
        
        default:{
            return state;

        }
    }
    
};