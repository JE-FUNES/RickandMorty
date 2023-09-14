import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from 'redux-thunk';
// es un middleware que permite hacer peticiones asincronas
// para configurarlo utilizamos applyMiddleware
import reducer from "./reducer";
// hasta aqui mas la const store son parte de la configuracion inicial

const composeEnhacer = window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer, 
    composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;