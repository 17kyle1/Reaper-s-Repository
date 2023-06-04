const router = require('express').Router();
// const { HomePage } = require('../models');
//const { Battles } = require('../../models');
//const { Disease } = require('../../models');
//const { LastingEffects } = require('../../models');


router.get('/', async (req, res) => {
    try {
        // const dbBattlesData = await Battles.findAll({})
        // const battle = dbBattlesData.map((battleData) =>
        //     battleData.get({ plain: true })
        // );
        res.render('homepage', {})
            // battle,
            // loggineIn: req.session.loggedIn

        // }
        // )
    } catch (err) {
        console.log("================================================================================");
        console.log(err);
    }
});

/*router.get('/battles', async (req, res) => {
    try {
        const dbBattlesData = await Battles.findAll({})
       
       res.render('Battles', {
           // battle,
           // loggineIn: req.session.loggedIn

       }
       )
   } catch (err) {
       console.log(err);
   }
});
*/
module.exports = router