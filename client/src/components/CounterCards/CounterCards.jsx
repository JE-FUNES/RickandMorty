import styles from './CounterCards.module.css';
const CounterCards = ({counter}) => {
    const contadorText = counter + " de 826 Personajes";
    
    return (
      <div className={styles.contadortext}>
        {contadorText}
      </div>
    );
  }

  // exportar aumentarContador y disminuirContador
export default CounterCards;