const {Sequelize} = require('sequelize')

module.exports = new Sequelize('photo_gallery', 'root', '', {
    host: process.env.host,
    dialect: "mysql"
})

