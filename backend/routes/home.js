const express = require ('express');
const Router = express.Router();
const {cloudinary} = require('../utils/cloudinary')

Router.get('/', (req,res) => {
    res.send('hello world')

})

module.exports = Router