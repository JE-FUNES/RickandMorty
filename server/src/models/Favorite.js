const { DataTypes } = require('sequelize');

// id dataType: integer allowNull: false primaryKey: true
// name dataType: string allowNull: false
// status dataType: Enum (Alive - Dead - unknown) allowNull: false
// species dataType: string allowNull: false
// gender dataType Enum (Female - Male - Genderless - unknown) allowNull: false
// origin dataType: string allowNull: false
// image dataType: string allowNull: false

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
            allowNull: false
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // gender dataType Enum (Female - Male - Genderless - unknown) allowNull: false
        gender: {
            type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }

   }, { timestamps: false });
};
