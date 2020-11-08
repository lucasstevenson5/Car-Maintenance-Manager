const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/new', ctrl.car.newCar);
router.get('/:index', ctrl.car.showCar);
router.put('/:index', ctrl.car.editCar);
router.post('/new', ctrl.car.postCar);



module.exports = router;