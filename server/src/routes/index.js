/* importar todos los controladores. 
También deberás importar las función Router de express. 
Crea una ruta para cada controlador con los siguientes paths:

GET getCharById: "/character/:id"
GET login: "/login"
POST postFav: "/fav"
DELETE deleteFav: "/fav/:id"
Finalmente exporta tu router.
*/

const express = require('express');
const router = express.Router();
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav');
const { postCarr, deleteCarr} = require('../controllers/handleCarrito');
const postUser = require('../controllers/postUser');


router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav); //en el cliente es addFav
router.post('/carr', postCarr); // en el cliete es addCarr
router.delete('/fav/:id', deleteFav); // en el cliente es removeFav
router.delete('/carr/:id', deleteCarr); // en el cliente es removeCarr

module.exports = router;