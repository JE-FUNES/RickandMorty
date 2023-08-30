import styles from "./About.module.css";
import React from "react";
import image from "../../img/foto julia.jpg"

const About = () => {
    
    return (
        <div className={styles.about}>
            <br />
            <h1>
                <span className={styles.quieres}>
                    QUIERES
                </span>
                <span className={styles.saber}>
                    SABER
                </span>
                <span className={styles.demi}>
                    DE MI?
                </span>
            </h1>
            <h2 className={styles.ok}>Ok, ...👁‍🗨
            </h2>
            <h3>Mi nombre completo es Julia Esther Funes Aragón, y sí,
            <br /> mis iniciales son JEFA 😎...
                <br />
                    aunque normalmente me llaman JULY💚
            </h3>
            <h3>Soy DISEÑADORA GRÁFICA, 
                <br/> PUBLICISTA, y, muy importante:
                <br/> futura WEB DEVELOPER ‼
            </h3>
            <br />
            <img src={image} alt="Una foto de mí" />
           
        </div>
    )
}
                    
export default About