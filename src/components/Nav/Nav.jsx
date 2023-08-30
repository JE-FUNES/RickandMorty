import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import CounterCards from '../CounterCards/CounterCards.jsx';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = ({onSearch, counter, logOut}) => {

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
                        <button className={styles.boton}>Favorits</button>
                    </Link>
                </li>



                
                <li>
                    <button className={styles.boton} onClick={() => logOut()}>Log Out</button>
                </li>
            </ul>
        </nav>
        <nav className={styles.nav2}>
            <ul>
                <li>
                    <div className={styles.divider}>
                    <SearchBar className={styles.searchBar} onSearch={onSearch} />
                    </div>
                </li>
                <li> 
                    <div className={styles.divider}>
                    {location.pathname === "/home" && (
                        <CounterCards  counter={counter} /> 
                    )}
                        <button className={styles.boton} onClick={() => onSearch(Math.floor(Math.random() * 826 ))}>Random</button>
                        </div>   
                </li>
            </ul>
        </nav>
    </div>
    );
};
            

export default Nav;