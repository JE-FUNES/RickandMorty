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
    
return (
    <div className={Styles.carr}>
        <div className={Styles.portada} >
        <h2 className={Styles.carritoTitle}>
      Tu Carrito:  <span className={Styles.carritoCount}>{carritoCount}</span>
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

    
   