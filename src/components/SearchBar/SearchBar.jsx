import React, { useState } from 'react';
import styles from './SearchBar.module.css';



export default function SearchBar({onSearch}) {

   const [id, setCharacterID] = useState('');

   const handleInputChange = (event) => {
      setCharacterID(event.target.value);
   };

   return (
      <div className={styles.SearchBar}>
         <ul>
            <li>
               <input 
                  className={styles.inputS}
                  type='search'
                  value={id}
                  onChange={handleInputChange}
                  placeholder='ID del personaje'
               />
            </li>
            <li>
               <button className={styles.buttonS} onClick={() => onSearch(id)}> 🔍 </button> 
            </li>
         </ul>
      </div>
   );
}
