const Sequelize = require('sequelize');
const db = require('../dbService')

const User = db.define('User' ,{

    username: {
        type: Sequelize.STRING,
        isNull: false
    },
    email: {
        type: Sequelize.STRING,
        isNull: false
    },
    password: {
        type: Sequelize.STRING,
        isNull: false
    }
}, {
    timestamps: false
})

module.exports = User