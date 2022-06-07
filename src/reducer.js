import { Decrement, Increment } from "./action.types";



export const reducer =(state, {type, payload})=>{
    switch(type){
        case Increment:{
            state.count=state.count+payload;
            return{ ...state };
        }case Decrement:{
            state.count=state.count-payload;
            return{ ...state };
        }
        
        
        default:{
            return state;

        }
    }
    
};