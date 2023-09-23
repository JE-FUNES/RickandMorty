const {User} = require('../DB_conection');

/* Crea una función llamada postUser y expórtala. 
Esta función debe recibir por parámetro los objetos req y res. 
Además, esta función es asincrónica, ¡por lo que deberás trabajar con 
promesas o async await!

Dentro de la función deberás recibir un email y una password por Body.

Una vez recibido, deberás validar que realmente hayas recibido ambos y 
que no sean, por ejemplo, un string vacío. 
En el caso de no recibir alguno de los dos deberás responder con un status 400 
y devolver un mensaje que diga: "Faltan datos".

En el caso de si recibir ambos datos deberás guardarlos dentro de tu modelo. 
Una vez realizado responde con el usuario guardado.

[NOTA]: puedes utilizar el método findOrCreate.

[NOTA]: en el caso de haber un error responde con status 500 y el mensaje 
del error.
*/

/*const postUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
       return res.status(400).json({ message: 'Faltan datos' });
    } else {
        try {
        const user = await User.findOrCreate({
            where: { email },
            defaults: { password },
        });
        return res.status(200).json(user);
        } catch (error) {
        res.status(500).json({ message: error.message });
        }
    }
    };
    */

    const postUser = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                await User.findOrCreate({ where: { email:email, password:password }, defaults: { email, password } });
                return res.status(200).json('Registrado con exito!')
            }
            return res.status(400).json('Faltan datos')
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    };

module.exports = postUser;
