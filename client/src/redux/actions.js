
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CARR, REMOVE_CARR} from "./actionTypes.js";
import axios from "axios";

// estas son las actions
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav'; // conexion con backend
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
   const endpoint = 'http://localhost:3001/rickandmorty/carr'; // conexion con backend
   return async (dispatch) => {
      try {
         const { data } = await axios.post(endpoint, character);

            return dispatch({
               type: ADD_CARR,
               payload: data,
            });
         }
         catch (error) {
            console.log(error);
      }
   };
};
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
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
   return async (dispatch) => {
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