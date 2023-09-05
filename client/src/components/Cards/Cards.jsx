import React from 'react';
import Card from '../Card/Card';
import styles from './cards.module.css';


export default function Cards({characters, onClose}) {

   
   return (
      <div className={styles.cardcontainer}>
         {characters.length > 0 ? (
         characters.map(({name,species,gender,image,origin,id,status}) => (
          
             <Card 
                  key={id}
                  id={id}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin}
                  status={status}
                  onClose={onClose} 
            /> 
         ))
         ) : (
         <div className={styles.container}>
            <span className={styles.txt}>Buscá y Divertite con los Personajes!</span>
             
            </div>
      
   )}
   </div>
   );
}
            
