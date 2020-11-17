const MaintenanceSchedule = require('../models').MaintenanceSchedule;
const constants = require('../constants');

const showScheduleItem = (req, res) => {
    MaintenanceSchedule.findByPk(req.params.index)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editScheduleItem = (req, res) => {
    MaintenanceSchedule.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then(updateItem => {
        MaintenanceSchedule.findByPk(parseInt(req.params.index))
        .then(foundItem => {
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
    MaintenanceSchedule.create(req.body)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
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
    postScheduleItem,
    deleteScheduleItem
}