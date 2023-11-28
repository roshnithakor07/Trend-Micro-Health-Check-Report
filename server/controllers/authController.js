'use strict';

var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../Models/authModel')





const register = async (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    user.password = bcrypt.hashSync(req.body.password, 10);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

};

const sign_in = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && bcrypt.compareSync(password, user.password)) {

        //res.json({ token: jwt.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs') });
        const token = jwt.sign({ email: user.email, _id: user._id }, 'RESTFULAPIs', { expiresIn: 60 });
        res.json({ token });

    } else {
        res.sendStatus(401);
    }


};

const loginRequired = async (req, res, next) => {

    if (req.user) {
        res.send(req.user);
        next();
    } else {

        return res.status(401).json({ message: 'Unauthorized user!!' });
    }
};


const logout = async (req, res, next) => {
    res.sendStatus(200);
}
module.exports = {
    register, sign_in, loginRequired, logout
}