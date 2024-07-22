import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const initialState = [];

export const reducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        
        case REMOVE_FROM_CART: 
            return state.filter(i=>i.id!==action.payload.id)
            
    
        default:
            return state;
    }

}