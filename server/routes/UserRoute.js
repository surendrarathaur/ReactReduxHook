const UserRoute = require('express').Router();
const config = require('../dbs/config');
const mongoose = require('mongoose');
mongoose.connect(config.DB).then(() => {
    console.log('Database is connected')   
    },
    error => {
        console.log('Database not connected')
    }
)

UserRoute.get('/login', (req, res) => {
    res.send('Test')
});

module.exports = UserRoute;