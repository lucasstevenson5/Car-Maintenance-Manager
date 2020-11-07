const User = require('../models').Users;



const rendProfile = (req, res) => {
    User.findByPk(req.user.id)
    .then(showProfile => {
        console.log(showProfile)
        res.render('users/profile.ejs', {
            users: showProfile
        })
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