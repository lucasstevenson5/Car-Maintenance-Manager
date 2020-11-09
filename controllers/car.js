const Car = require('../models').Car;
const User = require('../models').Users;
const MaintenanceItem = require('../models').MaintenanceItem;

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
    Car.update(req.body, {
        where: { id: req.params.index },
        returning: true,
    }).then(updateCar => {
        res.redirect(`/car/${req.params.index}`)
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
    Car.create(req.body)
    .then(carNew => {
        console.log(carNew)
        res.redirect(`/car/${carNew.id}`)
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