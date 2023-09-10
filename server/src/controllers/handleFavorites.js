/* deberás declarar un arreglo vacío llamado myFavorites.

[NOTA]: es importante que NO declares este arreglo como constante 
ya que lo modificaremos.

Crea una función llamada postFav que reciba por parámetro los 
objetos req y res.

Agrega en tu arreglo de favoritos el personaje que estarás 
recibiendo por Body.

Finalmente devuelve tu arreglo de favoritos en formato JSON.

Crea una función llamada deleteFav que reciba por parámetro los 
objetos req y res.

Filtra a tus personajes favoritos de manera que elimines aquel 
que tiene el mismo id que recibes por Params.

Finalmente devuelve tu arreglo de favoritos en formato JSON.

Exporta ambas funciones.
*/

let myFavorites = [];

const postFav = (req, res) => {
  const  character  = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter(character => character.id !== Number(id));
  return res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
