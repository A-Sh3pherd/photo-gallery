const Sequelize = require('sequelize');
const db = require('../dbService')

const Photo = db.define('Photo' ,{

    user_id: {
        type: Sequelize.NUMBER,
        isNull: false
    },
    url: {
        type: Sequelize.STRING,
        isNull: false
    }
}, {
    timestamps: false
})

module.exports = Photo