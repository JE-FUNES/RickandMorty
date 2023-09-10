const http = require ("http")
const getCharById = require("./src/controllers/getCharById.js")

http
.createServer((req, res) => {
    
    const {url} = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
//Crea un condicional que pregunte si la url incluye el string "/rickandmorty/character".
    if(url.includes("rickandmorty/character")) {
  
/*En el caso de que si lo incluya deberás ejecutar el controlador getCharById pasándole como argumentos:
 res y el id del personaje que recibes mediante la como parámetro.
[NOTA]: dentro del parámetro req.url está el id del personaje.
*/
      const charId = req.split("/").pop();
        getCharById(res, charId);

}
} )
.listen(3001);