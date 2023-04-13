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
        deaths: 50000000,
        description: 'Often referred to as the "Spanish Flu". Influenza cost the lives of millions of people, military and civilian throughout the Great War',
        relevency: 'The Corona Virus is often compared to the Spanish Flu, as both were global pandemics',
    }
   
];

const seedDiseases = () => Disease.bulkCreate(diseaseData);

module.exports = seedDiseases;