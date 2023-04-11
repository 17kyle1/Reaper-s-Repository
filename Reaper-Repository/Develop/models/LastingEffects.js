const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class LastingEffects extends Model {}

LastingEffects.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        deaths: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        relevency: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'lastingEffects',
    }
);

module.exports = LastingEffects;