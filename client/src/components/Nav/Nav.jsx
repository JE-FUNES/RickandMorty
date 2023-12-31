import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import CounterCards from '../CounterCards/CounterCards.jsx';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {useState} from "react";

const Nav = ({onSearch, counter, logOut, handleCloseAll}) => {

        const [shownIds, setShownIds] = useState([]);

        const handleRandom = () => {
            let randomId;
            do {
                randomId = Math.floor(Math.random() * 826);
                
            } while (shownIds.includes(randomId));

            setShownIds([...shownIds, randomId]);

            onSearch(randomId);
        };
    

    const location = useLocation();
    
    return (
    <div className={styles.general}>
        <nav className={styles.nav1}>
            <ul>
                <li>
                    <Link to="/home">
                        <button className={styles.boton}>Home</button>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <button className={styles.boton}>About</button>
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <button className={styles.boton}>Favorites</button>
                    </Link>
                </li>
                <li>
                    <button className={styles.boton} onClick={() => logOut()}>Log Out</button>
                </li>
                <li>
                    <Link to="/carrito">
                        <button className={styles.boton}>Mi 🛒</button>
                    </Link>
                </li>
            </ul>
        </nav>
        
        <nav className={`${styles.nav2} ${location.pathname === "/home" ? styles.nav2Home : ""}`}>
            <ul>
                <li>
                    <div className={styles.divider}>
                    {location.pathname === "/home" && (
                    <SearchBar className={styles.searchBar} onSearch={onSearch} />
                    )}
                    </div>
                </li>
                <li> 
                    <div className={styles.divider}>
                    {location.pathname === "/home" && (
                        <CounterCards  counter={counter} /> 
                    )}
                        {location.pathname === "/home" && (
                        <button className={styles.boton} onClick={handleRandom}>Random</button>
                        )}
                        {location.pathname === "/home" && (
                        <button className={styles.boton} onClick={handleCloseAll}>X all</button>
                        )}
                        </div>   
                </li>
            </ul>
        </nav>
    </div>
    );
};



                
       

export default Nav;