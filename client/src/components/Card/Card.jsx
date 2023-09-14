import React from "react";
import styles from "./Card.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import {connect, useDispatch} from 'react-redux'; 
// este metodo es para conectar el componente con el store
import { addFav, removeFav, addCarr, removeCarr } from "../../redux/actions";
import {useState, useEffect} from 'react';



function Card({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites, miCarrito}) {
   
   const [isFav, setIsFav] = useState(false);
   const [isCarr, setIsCarr] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const dispatch = useDispatch();

   console.log("miCarrito en Card", miCarrito);
   
   useEffect(() => {
       myFavorites?.forEach((fav) => {
          if (fav.id === id) {
             setIsFav(true);
          }
       });
    }, [myFavorites]);

    useEffect(() => {
      miCarrito?.forEach((carr) => {
         if (carr.id === id) {
            setIsCarr(true);
         }
      });
   }, [miCarrito]);
    
   
   

   function navigateHandler() {
      navigate(`/detail/${id}`);
   }

   

   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         (removeFav(id));
      } else {
         setIsFav(true);
         (addFav({name, status, species, gender, image, origin, id, onClose}));
      }
   }

   function handleCarrito() {
      if (isCarr) {
         setIsCarr(false);
         dispatch(removeCarr(id));
      } else {
         setIsCarr(true);
         dispatch(addCarr({name, status, species, gender, image, origin, id, onClose}));
      }
   }
   console.log("handleCarrito en Card", handleCarrito);
   return (
      <div className={styles.cardContainer}>
         <br></br>
         {location.pathname !== "/favorites" && location.pathname !== "/carrito" && (
         <button className={styles.botonX} onClick={() => onClose(id)}>X</button>
         )}
         <button className={styles.fav}  onClick={handleFavorite}>{isFav ? "❤️" : "🤍" } </button>
         <button className={styles.carr}  onClick={handleCarrito}>{isCarr ? "💲" : "🛒" } </button>
         <br></br>
         <h2 onClick={navigateHandler}> {name}</h2>
         <h2 onClick={navigateHandler}>Status: {status}</h2>
         <h2 onClick={navigateHandler}>Species: {species}</h2>
         <h2 onClick={navigateHandler}>Gender: {gender}</h2>
         <h2 onClick={navigateHandler}>Origin: {origin.name}</h2>
         <h2 className={styles.keyId} onClick={navigateHandler}>Key: {id}</h2>
         <br></br>
         <img className={styles.alineadoAbajo} src={image} alt={'Character' } onClick={navigateHandler} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      miCarrito: state.miCarrito, // aqui estoy construyendo un objeto por lo que no necesita llamarse igual a myFavorites
      myFavorites: state.myFavorites,
   };
}


const mapDispatchToProps = (dispatch) => {
   return {
      addCarr: (character) => dispatch(addCarr(character)),
      removeCarr: (id) => dispatch(removeCarr(id)),
      //el 1er removeFav es el que recibo por props
      
      // este ultimo removeFav que se despacha es el que importe
      //tanto addFavorite como removeFavorite son funciones que se van a ejecutar cuando se dispare el evento onClick
      // y las traigo de actions.js 
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card); 

//siempre primero va mapStateToProps y luego mapDispatchToProps. Card es el componente que se va a conectar con el store
// el connect recibe mapStateToProps y mapDispatchToProps, y luego recibe el componente que se va a conectar con el store

//pp 
         
         
