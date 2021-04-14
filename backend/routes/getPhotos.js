const express = require('express');
const Router = express.Router();
const User = require('../db/models/Users')
const Photo = require('../db/models/Photos')

Router.get('/photos/:user_id', async (req, res) => {
    let allPhotos = []
    const {user_id} = req.params
    try {
        const photos = await Photo.findAll({where: {"user_id": user_id}})
        photos.map(photo => {
            allPhotos.push(photo.dataValues.url)
        })
        res.send(allPhotos)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

module.exports = Router