const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/profile', ctrl.users.rendProfile);
router.put('/profile', ctrl.users.editProfile);
router.delete('/profile', ctrl.users.deleteProfile)



module.exports = router;