
import { ADD_FAV, REMOVE_FAV, REMOVE_FROM_FAV, FILTER, ORDER} from "./actionTypes.js";


// estas son las actions
export function addFav(character) {
    return {
        type: ADD_FAV, 
        payload: character
    };
}

export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    };
}

export function removeFromFav(id) {
    return {
        type: REMOVE_FROM_FAV,
        payload: id
    };
}

export const filterCards = (gender) =>  {
    return {
        type: FILTER, 
        payload: gender
    };
}

export const orderCards = (order) =>  {
       return {
        type: ORDER, 
        payload: order
    };
}