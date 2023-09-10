/* crear y exportar una función que recibirá por parámetro a los 
objetos req y res.

Deberás obtener los datos email y password que recibes mediante 
Query. Una vez hecho esto, importa tu arreglo de usuarios y 
verifica si dentro de ese arreglo hay un usuario que coincida 
tanto su email y su contraseña con los que recibes por Query.

En el caso de que haya un usuario que cumpla esa condición, 
entonces debes devolver una respuesta con status 200, y, 
en formato JSON, un objeto con una propiedad access: true. 
Caso contrario devuelve lo mismo pero con la propiedad 
access: false.
*/

const users = require('../utils/users');

const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
}

module.exports = login;