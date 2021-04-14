const express = require('express');
const Router = express.Router();
const User = require('../db/models/Users')

Router.post('/', async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({where: {"username": `${username}`}})
        if (user) {
            res.json({msg: 'User Found!', user})
            return;
        } else {
            res.send({msg: 'Username or Password are incorrect!'})
        }
    } catch (err) {
        console.log(err)
        res.status(500);
    }
});

module.exports = Router