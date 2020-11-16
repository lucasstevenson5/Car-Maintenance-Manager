const express = require('express'); //gets express libraries
const ctrl = require('../controllers'); //get controllers
const router = express.Router();



router.get('/:index', ctrl.maintenanceSchedule.showScheduleItem);
router.put('/:index', ctrl.maintenanceSchedule.editScheduleItem);
router.post('/new', ctrl.maintenanceSchedule.postScheduleItem);
router.delete('/:index', ctrl.maintenanceSchedule.deleteScheduleItem)



module.exports = router;