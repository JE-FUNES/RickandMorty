import { connect } from "react-redux";
import {useEffect, useState} from "react";
import Styles from "./carrito.module.css"
import Card from "../../components/Card/Card";



function Carrito({miCarrito}) {

const [carritoCount, setcarritoCount] = useState(0);

useEffect(()=>{
  setcarritoCount(miCarrito.length);
},[miCarrito])
/* fin prueba */
   console.log("miCarrito en Carrito", miCarrito);

    // por cada card en el carrito sumar $100. Por ejemplo, si hay 3 cards $100 * 3 = $300

    let carritoSuma = 0;
   
    miCarrito.forEach((carr) => {
        carritoSuma = carritoSuma + 100;
    })

    

return (
    <div className={Styles.carr}>
        <div className={Styles.portada} >
        <h2 className={Styles.carritoTitle}>
      Tu Carrito:  
      <span className={Styles.carritoCount}>
        {carritoCount}  
        </span> 
        <span className={Styles.carritoTotal}>
        items. Total:

        </span>
        <span className={Styles.carritoSuma}>$ {carritoSuma}  </span>
        <button className={Styles.carritoBtn}
        style={{ display: carritoSuma > 0 ? 'block' : 'none' }}
        >
        Comprar
        </button>
    </h2>
        </div>

        {
            miCarrito.map((carr) => {
                return (
                    <Card
                    key={carr.id}
                    id={carr.id}
                    name={carr.name}
                    species={carr.species}
                    gender={carr.gender}
                    image={carr.image}
                    status={carr.status}
                    origin={carr.origin}
                    onClose={carr.onClose}
                    />
                )
            })
        }            
    </div>
)
}


const mapStateToProps = (state) => {
    console.log("state.miCarrito en Carrito", state.miCarrito);
return {
    miCarrito: state.miCarrito,
};
}

export default connect(mapStateToProps, null)(Carrito);

    
   