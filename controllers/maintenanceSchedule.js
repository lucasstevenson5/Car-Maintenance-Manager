const MaintenanceSchedule = require('../models').MaintenanceSchedule;
const constants = require('../constants');

const showScheduleItem = (req, res) => {
    MaintenanceSchedule.findByPk(req.params.index)
    .then(item => {
        console.log(item)
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editScheduleItem = (req, res) => {
    console.log(req.body)
    MaintenanceSchedule.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then(updateItem => {
        MaintenanceSchedule.findByPk(parseInt(req.params.index))
        .then(foundItem => {
            console.log(foundItem);
            res.status(constants.SUCCESS).json(foundItem);
        })
        .catch(err => {
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const postScheduleItem = (req, res) => {
    // req.body.carId = req.params.index
    console.log(req.body)

    MaintenanceSchedule.create(req.body)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        // console.log(item)
        // res.redirect(`/car/${item.carId}`)
    })
}

const deleteScheduleItem = (req, res) => {
    MaintenanceSchedule.findByPk(req.params.index)
    .then(item => {
        MaintenanceSchedule.destroy({
            where: { id: req.params.index }
        }).then(() => {
            res.status(constants.SUCCESS).send('success')
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    showScheduleItem,
    editScheduleItem,
    // // newMaintenanceItem,
    postScheduleItem,
    deleteScheduleItem
}