const router = require('express').Router();

const apiRoutes = require('./api');
const projectRoutes = require('./project-routes.js');

// router.use('/', projectRoutes)
router.use('/api', apiRoutes);


module.exports = router;

