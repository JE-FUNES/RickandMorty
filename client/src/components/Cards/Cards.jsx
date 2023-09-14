import React from 'react';
import Card from '../Card/Card';
import styles from './cards.module.css';
import { Link } from 'react-router-dom';  
import backgroundImage from "./giphy.gif";
import Music from '../Music/Music';



export default function Cards({characters, onClose}) {

   /*const handleClickCapitulos = () => {
      window.location.href = 'https://formulatv.com/series/rick-y-morty/capitulos/';
   };

   const handleClickWallpapers = () => {
      window.location.href = 'https://wall.alphacoders.com/by_sub_category.php?id=233584&name=Rick+and+Morty+Wallpapers';
   };

   const handleClickStickers = () => {
      window.location.replace = 'https://giphy.com/rickandmorty';
   };
*/
   // return (
   //    <div className={styles.cardcontainer}>
   //       {characters.length > 0 ? (
   //       characters.map(({name,species,gender,image,origin,id,status}) => (
          
   //           <Card 
   //                key={id}
   //                id={id}
   //                name={name}
   //                species={species}
   //                gender={gender}
   //                image={image}
   //                origin={origin}
   //                status={status}
   //                onClose={onClose} 
   //          /> 
   //       ))
   //       ) : (
      
   //    )}
   // </div>
   //    );
   return (
      <div>
      <div className={styles.cardcontainer}>
         {characters.length === 0 ? (
            <div
            className={styles.backgroundimage}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            >
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <span className={styles.Busca} >Buscá </span>
               <span className={styles.y} >y </span>
               <span className={styles.Divertite} >Divertite </span>
                
               <span className={styles.con} >con </span>
               <span className={styles.los} >los </span>
               <span className={styles.Personajes}>Personajes!</span>
               <br />
            
            </div>

         ) : (
            characters?.map((element) => (
               <Card 
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    species={element.species}
                    gender={element.gender}
                    image={element.image}
                    origin={element.origin.name}
                    status={element.status}
                    onClose={onClose} 
              /> 
            ))
         )}
      
   </div>
   <div>

                  <ul className={styles.menuFooter}>
                     <li className={styles.liCard}>
                        <Link className={styles.linkCard} to="https://formulatv.com/series/rick-y-morty/capitulos/" target="_blank">
                        CAPÍTULOS
                        </Link>
                     </li>
                     <li className={styles.liCard}>
                        <Link className={styles.linkCard} to="https://wall.alphacoders.com/by_sub_category.php?id=233584&name=Rick+and+Morty+Wallpapers" target="_blank">
                        WALLPAPERS
                        </Link>
                     </li>
                     <li className={styles.liCard}>
                        <Link to="https://giphy.com/rickandmorty" target="_blank" className={styles.linkCard}>
                        STICKERS
                        </Link>
                     </li>
                     <li  className={styles.liCard1}><Music /></li>
                  </ul>
   </div>
   
   </div>
   
             );
          }
                  
               

             
             
             
               
              
             


              
               
              
            
         
             
         
            
