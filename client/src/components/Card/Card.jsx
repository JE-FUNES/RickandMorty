import React from "react";
import styles from "./Card.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import {connect} from 'react-redux'; 
// este metodo es para conectar el componente con el store
import { addFav, removeFav } from "../../redux/actions";
import {useState, useEffect} from 'react';



function Card({id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites}) {
   
   console.log(myFavorites);
  useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id == id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   const navigate = useNavigate();
   const [isFav, setIsFav] = useState(false);
   const location = useLocation();
    

   function navigateHandler() {
      navigate(`/detail/${id}`);
   }



   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({name, status, species, gender, image, origin, id, onClose});
      }
   }

   return (
      <div className={styles.cardContainer}>
         <br></br>
         {location.pathname !== "/favorites" && (
         <button className={styles.botonX} onClick={() => onClose(id)}>X</button>
         )}
         <button className={styles.fav}  onClick={handleFavorite}>{isFav ? "❤️" : "🤍" } </button>
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
      myFavorites: state.myFavorites // aqui estoy construyendo un objeto por lo que no necesita llamarse igual a myFavorites
   };
}


const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
      //el 1er removeFav es el que recibo por props
      
      // este ultimo removeFav que se despacha es el que importe
      //tanto addFavorite como removeFavorite son funciones que se van a ejecutar cuando se dispare el evento onClick
      // y las traigo de actions.js 
   };
};


export default connect(mapStateToProps, mapDispatchToProps)(Card); 

{//siempre primero va mapStateToProps y luego mapDispatchToProps. Card es el componente que se va a conectar con el store
// el connect recibe mapStateToProps y mapDispatchToProps, y luego recibe el componente que se va a conectar con el store
}
//pp 
