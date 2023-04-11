const { Disease } = require('../models');

const diseaseData = [
    {
        id: 1,
        name: 'trenchFoot',
        deaths: 0,
        description: '',
        relevency: '',
    },
    {
        id: 2,
        name: 'Typhoid',
        deaths: 0,
        description: '',
        relevency: '', 
    },
    {
        id: 3,
        name: 'Influenza',
        deaths: 0,
        description: '',
        relevency: '',
    },
    {
        id: 4,
        name: 'Malaria',
        deaths: 0,
        description: '',
        relevency: '',
    },
    {
        id: 5,
        name: 'Tuburculosis',
        deaths: 0,
        description: '',
        relevency: '',
    },
];

const seedDiseases = () => Disease.bulkCreate(diseaseData);

module.exports = seedDiseases;