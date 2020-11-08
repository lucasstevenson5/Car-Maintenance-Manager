const Car = require('../models').Car;
const User = require('../models').Users;

const showCar = (req, res) => {
    Car.findByPk(req.params.index)
    .then(carShow => {
        console.log(carShow)
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
        res.redirect('/users/profile')
    })
}


module.exports = {
    showCar,
    editCar,
    newCar,
    postCar
}