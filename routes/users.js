const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/', ctrl.users.rendProfile);
router.put('/', ctrl.users.editProfile);
router.delete('/', ctrl.users.deleteProfile)



module.exports = router;