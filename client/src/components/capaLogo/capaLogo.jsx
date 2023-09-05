import React from "react";
import styles from "./capaLogo.module.css";


function CapaLogo() {
  return (
    <div className={styles.box}>
        <div className={styles.image}>
        {/*<image src="./rick_morty.png" alt="logo" /> */}
        </div>
        <div className={styles.text}>
        <h1>  R   I   C   K      &     M   O   R   T   Y  </h1>
        </div>
        <div className={styles.firma}>
        <h3>by J.E.Funes</h3>
        </div>
    </div>
  )
}
    
      

export default CapaLogo;