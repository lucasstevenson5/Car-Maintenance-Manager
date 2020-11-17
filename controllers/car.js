const Car = require('../models').Car;
const MaintenanceSchedule = require('../models').MaintenanceSchedule;
const MaintenanceItem = require('../models').MaintenanceItem;
const constants = require('../constants');

const showCar = (req, res) => {
    Car.findByPk(req.params.index, {
        include: [{
            model: MaintenanceItem
        },
        {
            model: MaintenanceSchedule
        }],
        order: [
            [{model: MaintenanceItem}, 'carMiles', 'DESC'],
            [{model: MaintenanceSchedule}, 'itemDescription', 'ASC']
        ]
    })
    .then(carShow => {
        res.status(constants.SUCCESS).json(carShow)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editCar = (req, res) => {
    Car.update(req.body, {
        where: { id: parseInt(req.params.index) },
        returning: true,
    })
    .then(updateCar => {
        Car.findByPk(parseInt(req.params.index))
        .then(foundCar => {
            res.status(constants.SUCCESS).json(foundCar)
        })
        .catch(err => {
            res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const postCar = (req, res) => {
    req.body.userId = req.user.id

    Car.create(req.body)
    .then(carNew => {
        res.status(constants.SUCCESS).json(carNew)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteCar = (req, res) => {
    Car.findByPk(req.params.index)
    .then(foundCar => {
        if(foundCar.userId === req.user.id) {
            Car.destroy({
                where: {id: req.params.index}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        } else {
            res.status(constants.FORBIDDEN).send("ERROR: You are trying to delete someone else's car. If error persists, submit issue ticket")
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    showCar,
    editCar,
    postCar,
    deleteCar
}