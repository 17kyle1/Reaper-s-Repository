const { LastingEffects } = require('../models');

const lastingEffectsData = [
    {
        id: 1,
        name: 'Shell Shock',
        description: '',
        relevency: '',
    },
    {
        id: 2,
        name: 'Lost Generation',
        description: '',
        relevency: '', 
    },
    {
        id: 3,
        name: 'Treaty of Versailles',
        description: '',
        relevency: 'Led to World War 2',
    }

];

const seedLastingEffects = () => LastingEffects.bulkCreate(lastingEffectsData);

module.exports = seedLastingEffects;