const { Battles } = require('../models');

const battlesData = [
    {
        id: 1,
        name: 'Gallipoli',
        deaths: 130840,
        description: '(April 1915-January 1916), in an Entente attempt to break through to Constantinople and knock the Ottoman Empire out of the war. The battle was a massive failure for the Entente, costing many deaths',
        relevency: 'In WW2 the allies planned D-Day after learning from the mistakes of Gallipoli.',
    },
    {
        id: 2,
        name: 'Verdun',
        deaths: 300000,
        description: '(February-December 1916), The city of Verdun became a brutal battleground pitting the French against the Germans.',
        relevency: 'Craters from the battle still exist to this day', 
    },
    {
        id: 3,
        name: 'Somme',
        deaths: 1000000,
        description: '(July-November 1916), British and French fought the Germans at the River Somme to draw attention away from Verdun',
        relevency: 'Over 19,000 British troops died on the first day, nearly 10x the amount of American deaths in the War in Afghanistan.',
    },
]

const seedBattles = () => Battles.bulkCreate(battlesData);

module.exports = seedBattles;