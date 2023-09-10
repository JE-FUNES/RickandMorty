const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/'



/* 
Crea una función con el nombre getCharById y expórtala. 
Recibe por parámetro a los objetos req y res.
Dentro de la función haz una petición a la API a partir del id 
que recibes por Params.
En el caso de que todo salga OK y se encuentre a un personaje, 
devuelve un JSON con las propiedades: 
id, status, name, species, origin, image y gender.

En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con status 404 que diga Not fount.

Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.
*/

const getCharById = async (req, res) => {
  // haz una petición a la API a partir del id que recibes por Params.
  
  const { id } = req.params;
  await axios.get(`${URL}${id}`)
  .then (response => {
    const { id, status, name, species, origin, image, gender } = response.data;
    res.json({ id, status, name, species, origin, image, gender });
  } )
  .catch (error => { // .then
    //if(!response)
    res.status(404).send('Not found');
  })
  // En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades:
  // id, status, name, species, origin, image y gender.
  
  // En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con status 404 que diga Not fount.
  
  // Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.
  // .catch (error => {
  //   res.status(500).send(error.message);
  // })
}

module.exports = getCharById;