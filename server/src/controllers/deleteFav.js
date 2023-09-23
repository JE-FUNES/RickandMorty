const {Favorite} = require('../DB_conection');

/* Crea una función con el nombre deleteFav y expórtala. Esta función debes recibir por parámetro los objetos req y res.

Recibirás un id por parámetro. Tendrás que eliminar este personaje de tu tabla de favoritos.

Finalmente responde con una arreglo que contenga a todos tus personajes favoritos.

[NOTA]: puedes utilizar el query: destroy.

[NOTA]: en el caso de haber un error responde con status 500 y el mensaje del error.
*/

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        await Favorite.destroy({
            where: { id:id },
        });
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = deleteFav;
