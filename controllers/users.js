const User = require('../models').Users;



const rendProfile = (req, res) => {
    User.findByPk(req.user.id)
    .then(showProfile => {
        res.render('users/profile.ejs', {
            users: showProfile
        })
    })
}



module.exports = {
    rendProfile
}