const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/new', ctrl.maintenanceItem.newMaintenanceItem)
router.get('/:index', ctrl.maintenanceItem.showMaintenanceItem);
router.put('/:index', ctrl.maintenanceItem.editMaintenanceItem);
router.post('/new', ctrl.maintenanceItem.postMaintenanceItem)



module.exports = router;