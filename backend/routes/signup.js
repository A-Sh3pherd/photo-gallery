const express = require('express')
const Router = express.Router();
const User = require('../db/models/Users')

Router.post('/', async (req, res) => {
    const {username, email, password} = req.body
    try {
        const userExist = await User.findOne({where: {"username": `${username}`}})
        if (userExist) {
            res.send({message: 'Username is taken!'})
        } else {
            const user = await User.create({username, email, password})
            res.send({message: 'User Created!'})
        }
    } catch (err) {
        console.log(err);
        res.send({msg: `Error: ${err}`})
    }

})

module.exports = Router