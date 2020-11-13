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

// const newCar = (req, res) => {
//     User.findByPk(req.user.id)
//     .then(userDetails => {
//         console.log(userDetails)
//         res.render('car/new.ejs', {
//             users: userDetails
//         })
//     })
// }

const postCar = (req, res) => {
    req.body.userId = req.user.id
    console.log(req.body)

    Car.create(req.body)
    .then(carNew => {
        console.log(carNew)
        res.status(constants.SUCCESS).json(carNew)
        // console.log(carNew)
        // res.redirect(`/car/${carNew.id}`)
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
    // newCar,
    postCar,
    deleteCar
}