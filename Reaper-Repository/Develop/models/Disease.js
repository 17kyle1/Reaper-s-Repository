const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Disease extends Model {}

Disease.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        deaths: {
            type: DataTypes.TEXT,
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
    modelName: 'disease',
    }
);

module.exports = Disease;