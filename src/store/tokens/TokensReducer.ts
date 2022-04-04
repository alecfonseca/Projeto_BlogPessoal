import { Action } from "./action";

export interface TokenState {
    tokens:string
}

const initialState = {
    tokens:''
}

export const tokenReducer = (state: TokenState = initialState, Action: Action) => {
    switch ( Action.type){
        case 'ADD_TOKEN':{
       return {tokens: Action.payload} 
    }
    default:
        return state
    }
}