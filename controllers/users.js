const User = require('../models').Users;
const Car = require('../models').Car;

const constants = require('../constants');

const rendProfile = (req, res) => {
    User.findByPk(req.user.id, {
        include: [{
            model: Car,
        }],
        order: [
            [{model: Car}, 'year', 'DESC']
        ]
    })
    .then(showProfile => {
        res.status(constants.SUCCESS).json(showProfile)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editProfile = (req, res) => {
    User.update(req.body, {
        where: { id: req.user.id },
        returning: true
    })
    .then((data) => {
        User.findByPk(req.user.id, {
            include: [{
                model: Car,
            }]
        })
        .then(user => {
        res.status(constants.SUCCESS).json(user)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deleteProfile = (req, res) => {
    User.destroy(
        { where: { id: req.user.id } }
    ).then(() => {
        res.status(constants.SUCCESS).send('success')
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}


module.exports = {
    rendProfile,
    editProfile,
    deleteProfile
}