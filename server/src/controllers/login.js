

const users = require('../models/User');

/* Crea una función llamada login la cual reciba por parámetro los objetos 
req y res. No olvides exportarla.

Recibiras por Query los datos email y password.

En el caso de no recibir alguno de los datos, responde con un status 400 y el 
mensaje "Faltan datos".

Si ambos datos llegan correctamente tendrás que buscar aquel usuario que tenga 
el mismo email que recibiste anteriormente. En el caso de no encontrarlo 
responde con un status 404 y el mensaje "Usuario no encontrado".

En el caso de encontrar a un usuario con ese mismo email solo tendrás ahora 
que comparar si su password es igual a la password que recibiste anteriormente. 
En el caso de no serlo responde con un status 403 y un mensaje que diga 
"Contraseña incorrecta".

En el caso de que las contraseñas si coincidan, responde con el objeto:

{
   access: true;
}
[NOTA]: en el caso de haber un error responde con status 500 y el mensaje del 
error.
*/

const login = async (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) {
        res.status(400).json({ message: 'Faltan datos' });
    } else {
        try {
        const user = await users.findOne({
            where: { email },
        });
        if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            if (user.password !== password) {
            res.status(403).json({ message: 'Contraseña incorrecta' });
            } else {
            res.status(200).json({ access: true });
            }
        }
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    }
    };

module.exports = login;