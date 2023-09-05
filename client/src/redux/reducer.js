// agregamos la funcionalidad que se va a realizar al momento de ejecutar las actions.
import { ADD_FAV,  REMOVE_FAV, FILTER, ORDER} from "./actionTypes.js";

let initialState = {
    myFavorites : [],
    allCharactersFav: [],
};

export default function reducer (state = initialState, action) { // el destructuring de la action es {type, payload}
    switch(action.type) {
        case ADD_FAV:
            return {
                ...state, //mantengo y protejo el estado anterior
                myFavorites: [...state.allCharactersFav,action.payload],
                allCharactersFav: [...state.allCharactersFav, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload),
                allCharactersFav: state.allCharactersFav.filter(fav => fav.id !== action.payload)
                
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered

            }

            case ORDER:
                const allCharactersFavCopy = [...state.allCharactersFav]
                return {
                    ...state,
                    myFavorites: // ternario
                        action.payload === "A"
                        ? allCharactersFavCopy.sort((a,b) => a.id - b.id) //mayor a menor
                        : allCharactersFavCopy.sort((a,b) => b.id - a.id) // menor a mayor
                    }
       
        default: // jamas olvidartse de este caso, va si o si. siempre retona lo mismo
            return {
                ...state
    }
}
}