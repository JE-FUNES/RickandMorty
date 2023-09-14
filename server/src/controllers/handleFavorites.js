let myFavorites = [];

/*const postFav = (req, res) => {
  const  character  = req.body;
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
}
*/
function postFav(req, res) {
  try {
    const character = req.body;

    if (!character.name || !character.gender) throw new Error ( "Te faltan datos")
    myFavorites.push(character);
  res.status(200).json(myFavorites);
  }catch (error) {
    res.status(400).json({error:error})
  }
}

/*const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter(character => character.id !== Number(id));
  return res.status(200).json(myFavorites);
}
*/



function deleteFav(req, res) {
  try {
    const { id } = req.params;
    myFavorites = myFavorites.filter((character) => character.id !== Number(id));

    if (myFavorites.length === 0) {
      // Si myFavorites está vacío, respondemos con un arreglo vacío.
      res.status(200).json([]);
    } else {
      res.status(200).json(myFavorites);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



module.exports = { postFav, deleteFav };

