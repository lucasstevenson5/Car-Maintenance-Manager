const MaintenanceItem = require('../models').MaintenanceItem;
const Car = require('../models').Car;
const User = require('../models').Users;
const constants = require('../constants');

const showMaintenanceItem = (req, res) => {
    MaintenanceItem.findByPk(req.params.index)
    .then(item => {
        res.render('maintenanceItem/show.ejs', {
            item: item
        })
    })
}

const editMaintenanceItem = (req, res) => {
    MaintenanceItem.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then(updateItem => {
        res.redirect(`/maintenance/${req.params.index}`)
    })
}

const newMaintenanceItem = (req, res) => {
    User.findByPk(req.user.id)
    .then(userDetails => {
        console.log(userDetails)
        Car.findAll({
            where: { userId: userDetails.id },
            order: [
                ['id', 'ASC']
            ]
        }).then(car => {
            console.log(car)
            res.render('maintenanceItem/new.ejs', {
                car: car
            })
        })
    })
}

const postMaintenanceItem = (req, res) => {
    // req.body.carId = req.params.index
    console.log(req.body)

    MaintenanceItem.create(req.body)
    .then(item => {
        res.status(constants.SUCCESS).json(item)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
        // console.log(item)
        // res.redirect(`/car/${item.carId}`)
    })
}

const deleteMaintenanceItem = (req, res) => {
    MaintenanceItem.findByPk(req.params.index)
    .then(item => {
        MaintenanceItem.destroy({
            where: { id: req.params.index }
        }).then(() => {
            res.redirect(`/car/${item.carId}`)
        })
    })
    
}

module.exports = {
    showMaintenanceItem,
    editMaintenanceItem,
    newMaintenanceItem,
    postMaintenanceItem,
    deleteMaintenanceItem
}