const { Battles } = require('../models');

const battlesData = [
    {
        id: 1,
        name: 'Gallipoli',
        deaths: 130840,
        description: '',
        relevency: '',
    },
    {
        id: 2,
        name: 'Verdun',
        deaths: 300000,
        description: '',
        relevency: '', 
    },
    {
        id: 3,
        name: '',
        deaths: 130840,
        description: '',
        relevency: '',
    },
    {
        id: 4,
        name: '',
        deaths: 130840,
        description: '',
        relevency: '',
    },
    {
        id: 5,
        name: 'G',
        deaths: 130840,
        description: '',
        relevency: '',
    },
];

const seedBattles = () => Battles.bulkCreate(battlesData);

module.exports = seedBattles;