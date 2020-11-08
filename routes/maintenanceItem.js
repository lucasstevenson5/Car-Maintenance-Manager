const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/:index', ctrl.car.showCar);



module.exports = router;