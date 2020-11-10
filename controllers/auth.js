require('dotenv').config();

const jwt = require('jsonwebtoken');
//const bcrypt = require('bcryptjs');
const User = require('../models').Users;
const constants = require('../constants');

const rendSignup = (req,res) => {
    res.render('auth/signup.ejs', {
        error: false
    })
}

const rendLogin = (req, res) => {
    res.render('auth/login.ejs', {
        error: false
    })
}

const signup = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        const token = jwt.sign(
            {
                id: newUser.id,
                username: newUser.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30 days'
            }
        );
        res.status(constants.SUCCESS).json({
            "token" : token,
            "user": newUser
        });

        res.cookie('jwt', token);
        res.redirect(`/users/profile`);
    })
    .catch(() => {
        res.status(constants.BAD_REQUEST).send(`ERROR: ${err}`);
        // res.render('auth/signup.ejs', {
        //     error: true
        // })
    })
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }, 
    })
    .then(foundUser => {
        if(foundUser) {
            const token = jwt.sign(
                {
                    id: foundUser.id,
                    username: foundUser.username
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '30 days'
                }
            )
            res.status(constants.SUCCESS).json({
                "token" : token,
                "user": foundUser
            });
            
            res.cookie('jwt', token);
            res.redirect(`/users/profile`);
        } else {
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Username/Password`);
            // res.render('auth/login.ejs', {
            //     error: true
            // })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const verifyUser = (req, res) => {
    User.findByPk(req.user.id)
    .then(foundUser => {
        res.status(constants.SUCCESS).json(foundUser);
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send
    })
}

module.exports = {
    rendSignup,
    rendLogin,
    signup,
    login,
    verifyUser
}