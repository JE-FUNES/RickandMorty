
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CARR, REMOVE_CARR} from "./actionTypes.js";
import axios from "axios";

// estas son las actions
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

 export const addCarr = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/carr';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_CARR,
            payload: data,
         });
      });
   };
};
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

 export const removeCarr = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/carr/' + id;
   return (dispatch) => {
      axios.delete(endpoint).then(({ data }) => {
         return dispatch({
            type: REMOVE_CARR,
            payload: data,
      });
      });
   };
};


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