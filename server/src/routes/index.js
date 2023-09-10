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
const { postFav, deleteFav } = require('../controllers/handleFavorites');

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router;