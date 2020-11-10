const User = require('../models').Users;
const Car = require('../models').Car;

const constants = require('../constants');

const rendProfile = (req, res) => {
    User.findByPk(req.user.id, {
        include: [{
            model: Car,
        }]
    })
    .then(showProfile => {
        res.status(constants.SUCCESS).json(showProfile)
        // console.log(showProfile.Cars[0])
        // res.render('users/profile.ejs', {
        //     users: showProfile
        // })
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
    .then(user => {
        console.log(user)
        res.redirect('/users/profile')
    })
}

const deleteProfile = (req, res) => {
    User.destroy(
        { where: { id: req.user.id } }
    ).then(() => {
        res.redirect("/");
    })
}


module.exports = {
    rendProfile,
    editProfile,
    deleteProfile
}