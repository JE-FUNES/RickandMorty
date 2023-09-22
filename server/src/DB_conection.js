require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoritesModel = require('./models/Favorite.js');
const UsersModel = require('./models/User.js');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. 
// ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`, 
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los 
//modelos.
FavoritesModel(sequelize);
UsersModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite } = sequelize.models;

 User.hasMany(Favorite);
    Favorite.belongsToMany(User, { through: 'user_favorite' });

    // exporta cada modelo de forma individual
module.exports = {
    User,
    Favorite,
   conn: sequelize,
};

