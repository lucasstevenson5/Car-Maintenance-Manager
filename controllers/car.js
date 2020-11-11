const Car = require('../models').Car;
const User = require('../models').Users;
const MaintenanceItem = require('../models').MaintenanceItem;
const constants = require('../constants');

const showCar = (req, res) => {
    Car.findByPk(req.params.index, {
        include: [{
            model: MaintenanceItem,
        }]
    })
    .then(carShow => {
        // console.log(carShow.MaintenanceItems[0].carMiles)
        res.render('car/show.ejs', {
            car: carShow
        })
    })
}

const editCar = (req, res) => {
    console.log(req.params.index)
    console.log(parseInt(req.params.index))
    console.log(req.body)
    Car.update(req.body, {
        where: { id: parseInt(req.params.index) },
        returning: true,
    })
    .then(updateCar => {
        console.log("==========================")
        console.log(updateCar);
        console.log("==========================")
        Car.findByPk(parseInt(req.params.index))
        .then(foundCar => {

            console.log(foundCar)
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

const newCar = (req, res) => {
    User.findByPk(req.user.id)
    .then(userDetails => {
        console.log(userDetails)
        res.render('car/new.ejs', {
            users: userDetails
        })
    })
}

const postCar = (req, res) => {
    req.body.userId = req.user.id

    Car.create(req.body)
    .then(carNew => {
        res.status(constants.SUCCESS).json(carNew)
        // console.log(carNew)
        // res.redirect(`/car/${carNew.id}`)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteCar = (req, res) => {
    Car.destroy({
        where: { id: req.params.index }
    }).then(() => {
        res.redirect('/users/profile')
    })
}

module.exports = {
    showCar,
    editCar,
    newCar,
    postCar,
    deleteCar
}