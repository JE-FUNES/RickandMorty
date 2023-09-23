const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./src/routes/index');
const { conn } = require('./src/DB_conection');

server.use((req, res, next) => {
   // sincroniza sequelize con la base de datos antes que se
   // levante el servidor
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
   
    next();
 });

server.use(express.json());

//Crea un middleware que agregue el string "/rickandmorty" antes de cada una de tus rutas.

server.use('/rickandmorty', router); // 

/*server.listen(PORT, () => {
   sequelize.sync({force: true});
    console.log("Servidor en puerto: " + PORT);
    });
*/
server.listen(PORT, async () => {
   try {
       // Sincroniza sequelize con la base de datos antes de iniciar el servidor
       await conn.sync({ force: false });
       console.log("Servidor en puerto: " + PORT);
   } catch (error) {
       console.error("Error al sincronizar la base de datos:", error);
   }
});

