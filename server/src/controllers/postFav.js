const Favorite = require('../models/favorite');

/* Crea una función llamada postFav la cual reciba por parámetro los objetos req y res.

Deberás recibir las propiedades name, origin, status, image, species y gender por Body. 
Valida que todos los datos estén llegando correctamente. 
Caso contrario responde con un status 401 y el mensaje "Faltan datos".

Si todos los datos llegan como corresponde, guarda tu personaje en la base 
de datos.

Una vez guardado, busca todos los personajes favoritos guardados en tu base 
de datos y responde con ese arreglo.

[NOTA]: puedes utilizar el método findOrCreate.

[NOTA]: en el caso de haber un error responde con status 500 y el mensaje del error.
*/

const postFav = async (req, res) => {
    const { 
        name,
        origin,
        status,
        image,
        species,
        gender
    } = req.body;     

    if ( 
        !name ||
        !origin ||
        !status ||
        !image ||
        !species ||
        !gender           
    ) {
        res.status(401).json({ message: 'Faltan datos' });
    } else {
        try {
        const favorite = await Favorite.findOrCreate({
            where: { name },
            defaults: {
                origin,
                status,
                image,
                species,
                name,
                gender
            },
        });
        res.status(200).json(favorite);

        } catch (error) {
        res.status(500).json({ message: error.message });
        }

}};

module.exports = postFav;