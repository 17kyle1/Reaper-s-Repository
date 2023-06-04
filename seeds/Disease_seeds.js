const { Disease } = require('../models');

const diseaseData = [
    {
        id: 1,
        name: 'TrenchFoot',
        deaths: 'Over 100,000 deaths for both the Entente and Central Powers',
        description: 'The horrible conditions of trench warfare left many troops vulnerable to trench foot. A condition where the tissue of the foot would decay, necesitating amputation ',
        relevency: 'Often compared to frostbite, but can occur at temperatures above freezing.',
    },
    {
        id: 2,
        name: 'Malaria',
        deaths: 'Average of 80,000 people died per month during war due to infection',
        description: 'Mosquito-borne infectious disease which can cause headaches, fever, coma and even death',
        relevency: 'In 2018, there were an estimated 228 million cases of malaria across the globe', 
    },
    {
        id: 3,
        name: 'Influenza',
        deaths: 'Between 20-40 million people',
        description: 'Often referred to as the "Spanish Flu". Influenza cost the lives of millions of people, military and civilian throughout the Great War',
        relevency: 'The Corona Virus is often compared to the Spanish Flu, as both were global pandemics',
    }
   
];

const seedDiseases = () => Disease.bulkCreate(diseaseData);

module.exports = seedDiseases;