import React from 'react';
import styles from './landingPage.module.css';
import LoginForm from '../../components/loginForm/loginForm';


function LandingPage({login}){
    return(
        <div className={styles.pageContainer}>
            <div className={styles.landingContainer}>
            </div>  
            <LoginForm login={login}/>
            <h3 className={styles.footer}>🟢💚🟩 © 2023 - Proyecto Integrador Julia E. Funes 🟩💚🟢</h3>
        
        </div>
    )
}

export default LandingPage;