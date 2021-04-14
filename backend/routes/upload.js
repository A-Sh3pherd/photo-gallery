const express = require('express');
const Router = express.Router();
const Photo = require('../db/models/Photos');
const User = require('../db/models/Users');

Router.post('/', async (req, res) => {
    const {user_id, url} = req.body

    try {
        const user = await User.findOne({where: {"id": user_id}})
        if (!user) {
            res.status(500)
            return;
        }
        await Photo.create({user_id, url})
        res.send("Success!")
    } catch (err) {
        console.log(err)
        res.status(500)
    }
})

module.exports = Router