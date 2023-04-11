const router = require('express').Router();
const { HomePage } = require('../models');

router.get('/', async (req, res) => {
    try {
        const homepageData = await Gallery.findAll({
            include: [
                {
                    model: HomePage,
                    attributes: ['Battles', 'Disease', 'Lasting Effects'],
                },
            ],
        });

// authentication in week 14/act 19
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
});

