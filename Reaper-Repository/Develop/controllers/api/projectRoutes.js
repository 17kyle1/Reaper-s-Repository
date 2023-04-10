const router = require('express').Router();
const { Battles, Disease, LastingEffects } = require('../models');

router.get('/', async (req, res) => {
    try {
        const homepageData = await Battles.findAll({
            include: [
                {
                    model: ChildTables,
                    attributes: ['Battles', 'Disease', 'Lasting Effects'],
                }
            ]
        });

    }
});