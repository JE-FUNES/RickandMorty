
const axios = require('axios');

// Función para obtener un personaje por su ID
const getCharById = (res, id) => {
  // URL de la API de Rick & Morty con el ID proporcionado
  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  // Realizar la solicitud a la API utilizando axios
  axios
    .get(apiUrl)
    .then((response) => {
      // Extraer los datos relevantes de la respuesta
      const {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      } = response.data;

      // Crear un objeto con las propiedades requeridas
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };

      // Enviar la respuesta en formato JSON con status 200
      res.status(200).json(character);
    })
    .catch((error) => {
      // Manejar errores y enviar una respuesta
      res.status(500).contentType('text/plain').send(error.message);
    });
};

module.exports = getCharById;