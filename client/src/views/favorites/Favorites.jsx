import { connect, useDispatch } from "react-redux";
import {useEffect, useState} from "react";
import Styles from "./favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../../components/Card/Card";


function Favorites({myFavorites}) {

const [favoriteCount, setfavoriteCount] = useState(0);

    const dispatch = useDispatch();
    /* prueba */
    // const [character, setCharacter] = useState([])
    
    useEffect(()=>{
      setfavoriteCount(myFavorites.length);
    },[myFavorites])
    /* fin prueba */

    const handleOrder = (event) => {
dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        const selectedGender = event.target.value;

        if (selectedGender === "all") {
            dispatch(filterCards("all"));
    } else {
        dispatch(filterCards(selectedGender));
    }
}
   
    return (
        <div className={Styles.fav}>
            <div className={Styles.portada} >
            <h1 className={Styles.favoriteTitle}>
          Tus Favoritos:  <span className={Styles.favoriteCount}> { favoriteCount}</span>
        </h1>
            <label>A - Z:</label>
            <select onChange={handleOrder} >
                
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                
            </select>
            <label>GÉNERO:</label>
            <select onChange={handleFilter} >
            
                <option value="all">All Favorites</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                
            </select>
            </div>

            {
                myFavorites.map((fav) => {
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
                        onClose={fav.onClose}
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