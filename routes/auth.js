const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();

router.post('/signup', ctrl.auth.signup)
router.post('/login', ctrl.auth.login);
router.get('/', ctrl.auth.verifyUser);

module.exports = router;