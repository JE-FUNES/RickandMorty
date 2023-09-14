import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,  useEffect } from "react";
import styles from "./Detail.module.css";


const Detail = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div className={styles.contenedorGral}>
            <h1>✨{character.name}✨
           
            </h1>
            <div className={styles.contenedorTarjetaImagen}>
                <div className={styles.contenedorTarjeta}>
                    <div className={styles.tarjeta}>
                       <div className={styles.contenedorTexto}>
                            <ul>
                                <li><h3>Status 👉 {character.status}</h3></li>
                                <li><h3>Species 👉 {character.species}</h3></li>
                                <li><h3>Gender 👉 {character.gender}</h3></li>
                                <li><h3>Origin 👉 {character.origin?.name}</h3></li> 
                                <li><h3>Location 👉 {character.location?.name}</h3></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.contenedorImagen}>
                    <img src={character.image} alt={character.name} />
                </div>
            </div>
        </div>
    )};

    
 
     
     
     
     export default Detail; 