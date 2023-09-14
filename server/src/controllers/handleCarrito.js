let miCarrito = [];

const postCarr = (req, res) => {
  const  character  = req.body;
  miCarrito.push(character);
  return res.status(200).json(miCarrito);
}

const deleteCarr = (req, res) => {
  const  id  = req.params;
  miCarrito = miCarrito.filter(character => character.id !== Number(id));
  return res.status(200).json(miCarrito);
}

module.exports = { postCarr, deleteCarr };