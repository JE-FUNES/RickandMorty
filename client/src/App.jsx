import React, {useState, useEffect}  from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import axios from 'axios';
import {Route, Routes, useLocation, Navigate, useNavigate} from 'react-router-dom';
import About from './views/About/About.jsx';
import Detail from './views/Detail/Detail';
import Error from './views/Error/Error.jsx';
import LandingPage from './views/landingPage/landingPage';
import CapaLogo from './components/capaLogo/capaLogo';
import Favorites from './views/favorites/Favorites';
import Carrito from './views/Carrito/Carrito';


/* pásale la función login que creaste en el ejercicio anterior al componente Form mediante props */

function App() {

   let [characters, setCharacters] = useState([]); // estado characters que se inicializa como un array vacío
   let [counter, setCounter] = useState(0);
   const location = useLocation();
   let [access, setAccess] = useState(false);
   const navigate = useNavigate();

   
   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function logOut() {
      setAccess(false);
      navigate('/');
   }
   

   function onSearch(id) {
      
      if (parseInt(id) > 826) {
         window.alert('¡No hay personajes con este ID!');
         
      } else {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         const existingCharacter = characters.find((character) => character.id === data.id);
         
         if (existingCharacter) {
            window.alert('¡Este personaje ya fue agregado!');
            return;
         } else if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
            setCounter(counter + 1);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      }).catch((error) => {
            window.alert('¡No hay personajes con este ID!');
         });
      }
   }


function onClose(id) {
   const filteredCharacters = characters.filter(
      (character) => character.id !== Number(id));
      
   setCharacters(filteredCharacters);
   setCounter(counter - 1);
   }
      
   function handleCloseAll(){
      setCharacters([]);
      setCounter(0);
   }
   

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav 
         className='nav' 
         onSearch={onSearch}
         counter={counter} 
         logOut={logOut}
         handleCloseAll={handleCloseAll}
         />}
         {location.pathname !== '/' &&
         <CapaLogo />}
         
      <Routes>
        <Route path='/' element={<LandingPage login={login} />} />
         <Route path='/about' element={<About />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path='/carrito' element={<Carrito />} />
         <Route path='/404' element={<Error />} />
         <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
      <div className='space'></div>
                  
      </div>
         
   );
}

export default App;