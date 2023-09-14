const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./src/routes/index');

server.use((req, res, next) => {
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

server.use('/rickandmorty', router);

server.listen(PORT, () => {
    console.log("Servidor en puerto: " + PORT);
    });

