const router = require('express').Router();
const { HomePage } = require('../models');
const { Battles } = require('../models');
const { Disease } = require('../models');
const { LastingEffects } = require('../models');


router.get('/', async (req, res) => {
    try {
        console.log("It worked!")
    }
    catch(err){
        console.log(err)
    }
})
/*router.get('/', async (req, res) => {
    try {
        const dbBattlesData = await Battles.findAll({})
        const battle = dbBattlesData.map((battleData) =>
            battleData.get({ plain: true })
        );
        res.render('battles', {
            battle,
            loggineIn: req.session.loggedIn

        }
        )
    } catch (err) {
        console.log(err);
    }
}); 

*/
module.exports = router;