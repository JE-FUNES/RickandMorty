import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css';
import CounterCards from '../CounterCards/CounterCards.jsx';
import {Link, NavLink} from 'react-router-dom';

const Nav = ({onSearch, counter, logOut}) => {
    return (
        <div className={styles.general}>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to={`/home`}>
                        <button className={styles.boton}>Home</button>
                    </NavLink>
                </li>
             <li>
       <Link to={`/about`}>
       <button className={styles.boton}>About</button>
       </Link>
       </li>
       <li>
        <button className={styles.boton} onClick={() => logOut()}>Log Out</button>
       </li>
       </ul>
        </nav>
       <nav className={styles.nav}>
            <ul>
        <li><SearchBar className={styles.searchBar} onSearch={onSearch} />
        </li>
        <li>    
         <button className={styles.boton} onClick={() => onSearch(Math.floor(Math.random() * 826 ))}>Add Random</button>
         </li>
         <li><CounterCards className={styles.counterCards} counter={counter} /> 
         </li>
            </ul>
        </nav>
        </div>
    );
};

export default Nav;