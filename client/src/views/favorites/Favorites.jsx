import { connect, useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import Styles from "./favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../../components/Card/Card";


function Favorites({myFavorites}) {
    const dispatch = useDispatch();
    /* prueba */
    const [character, setCharacter] = useState([])
    useEffect(()=>{
        setCharacter(myFavorites)
    },[myFavorites])
    /* fin prueba */
    const handleOrder = (event) => {
dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
    }
   
    return (
        <div className={Styles.fav}>
            <div className={Styles.portada} >
            <h1>Tus Favoritos</h1>
            <label>A - Z:</label>
            <select onChange={handleOrder} >
                
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                
            </select>
            <label>GÉNERO:</label>
            <select onChange={handleFilter} >
            
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                
            </select>
            </div>

            {
                character?.map((fav) => {
                    return (
                        < Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        status={fav.status}
                        origin={fav.origin}
                        OnClose={fav.onClose}
                        />
                    )
                })
            }            
        </div>
    )
}






            

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
}

export default connect(mapStateToProps, null)(Favorites);