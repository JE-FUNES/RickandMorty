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
  
  try {
    // Haz una petición a la API a partir del id que recibes por Params.
    const { id } = req.params;
    
    const response = await axios.get(`${URL}${id}`);

    if (response.status === 200) {
      const { id, status, name, species, origin, image, gender } = response.data;
      res.json({ id, status, name, species, origin, image, gender });
    } else {
      // Si la respuesta no es un código 200, puedes manejar el error de la manera que consideres apropiada.
      res.status(response.status).send(response.statusText);
    }
  } catch (error) {
    // Capturamos cualquier error que pueda ocurrir durante la petición o el procesamiento de la respuesta.
    // Puedes enviar una respuesta de error adecuada en función del tipo de error que se produzca.
    res.status(500).send('Not Found');
  }

  
  /* MI CODIGO
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
 */ 
}

module.exports = getCharById;