import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export function addToCart(item){
    return {
        type:ADD_TO_CART,
        payload : item
    }
}

export function removeFromCart(id){
    return {
        type:REMOVE_FROM_CART,
        payload: id
    }
}