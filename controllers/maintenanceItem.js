const MaintenanceItem = require('../models').MaintenanceItem;
const constants = require('../constants');

const showMaintenanceItem = (req, res) => {
    MaintenanceItem.findByPk(req.params.index)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editMaintenanceItem = (req, res) => {
    MaintenanceItem.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then(updateItem => {
        MaintenanceItem.findByPk(parseInt(req.params.index))
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

const postMaintenanceItem = (req, res) => {
    MaintenanceItem.create(req.body)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteMaintenanceItem = (req, res) => {
    MaintenanceItem.findByPk(req.params.index)
    .then(item => {
        MaintenanceItem.destroy({
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
    showMaintenanceItem,
    editMaintenanceItem,
    postMaintenanceItem,
    deleteMaintenanceItem
}