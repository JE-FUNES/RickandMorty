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
import About2 from './views/About/About2.jsx';
import Favorites from './views/favorites/Favorites';

/* pásale la función login que creaste en el ejercicio anterior al componente Form mediante props */

function App() {

   let [characters, setCharacters] = useState([]); // estado characters que se inicializa como un array vacío
   let [counter, setCounter] = useState(0);
   const location = useLocation();
   let [access, setAccess] = useState(false);
   const email = 'infoventacba@gmail.com';
   const password = '123456';
   const navigate = useNavigate();

   
   function login(user) {
      if (user.email === email && user.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

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
      
   

   return (
      <div className='App'>
         <CapaLogo />
         {location.pathname !== '/' && <Nav 
         className='nav' 
         onSearch={onSearch}
         counter={counter} 
         logOut={logOut}
         />}
         
      <Routes>
        <Route path='/' element={<LandingPage login={login} />} />
         <Route path='/about' element={<About />} />
         <Route path='/favorites' element={<Favorites />} />
         <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
         <Route path='/detail/:id' element={<Detail />} />
         <Route path='/404' element={<Error />} />
         <Route path='/about2' element={<About2 />} />
         <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
      <div className='space'></div>
                  
      </div>
         
   );
}

export default App;