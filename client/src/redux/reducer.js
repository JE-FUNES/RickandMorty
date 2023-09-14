// agregamos la funcionalidad que se va a realizar al momento de ejecutar las actions.
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, ADD_CARR, REMOVE_CARR} from "./actionTypes.js";


let initialState = {
    miCarrito : [],
    myFavorites : [],
    allCharactersFav: [],
    allCharactersCarr: [],
    order: "A", // "A" para ascendente, "D" para descendente
};

export default function reducer (state = initialState, action) { // el destructuring de la action es {type, payload}
    switch(action.type) {

        case ADD_FAV:
            console.log("fav", state.myFavorites );
            return {
        ...state,
        myFavorites: action.payload,
        allCharactersFav: action.payload 
      }

        case ADD_CARR:
            console.log("Agrego al Carrito", state.miCarrito)
          return {
       ...state,
        miCarrito: action.payload,
       allCharactersCarr: action.payload 
       }      

        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };

        case REMOVE_CARR:
            return { ...state, miCarrito: action.payload };

            /* prueba
            const updatedMiCarrito = state.miCarrito.filter(
                (character) => character.id !== action.payload
            );
            console.log("Quito del Carrito", state.miCarrito)
             return { ...state, miCarrito: updatedMiCarrito };    
            */

        case FILTER:
            if (action.payload === "all") {
                return {
                    ...state,
                    myFavorites: state.allCharactersFav
                };
            } else {
                const allCharactersFiltered = state.allCharactersFav.filter(
                    (character) => character.gender === action.payload
                );
            
            const orderedFilteredCharacters = state.order === "A"
            ? allCharactersFiltered.sort((a,b)=> a.id - b.id)
            : allCharactersFiltered.sort((a,b)=> b.id - a.id);
            
            return {
                ...state,
                myFavorites: orderedFilteredCharacters,

            };
        }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];
            const myFavoritesCopy= [...state.myFavorites];
            const charactersToOrder = myFavoritesCopy.length > 0 ? myFavoritesCopy : allCharactersFavCopy;
            
            const orderedCharacters = action.payload === "A"
                ? charactersToOrder.sort((a,b) => a.id - b.id) //mayor a menor
                : charactersToOrder.sort((a,b) => b.id - a.id) // menor a mayor
         
            return {
                ...state,
                myFavorites: myFavoritesCopy.length > 0 ? orderedCharacters : state.myFavorites,
                allCharactersFav: allCharactersFavCopy,
            };
       
        default: // jamas olvidartse de este caso, va si o si. siempre retona lo mismo
            return {
                ...state
    }
}
}
