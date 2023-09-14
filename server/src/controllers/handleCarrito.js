let miCarrito = [];

function postCarr(req, res) {
  try {
    const character = req.body;

    if (!character.name || !character.gender) throw new Error ( "Te faltan datos")
    miCarrito.push(character);
  res.status(200).json(miCarrito);
  }catch (error) {
    res.status(400).json({error:error})
  }
} ;

function deleteCarr(req, res) {
  try {
    const { id } = req.params;
    miCarrito = miCarrito.filter((character) => character.id !== Number(id));

    if (miCarrito.length === 0) {
      // Si myFavorites está vacío, respondemos con un arreglo vacío.
      res.status(200).json([]);
    } else {
      res.status(200).json(miCarrito);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
}

module.exports = { postCarr, deleteCarr };