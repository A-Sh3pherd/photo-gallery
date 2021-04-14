// Packages
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3005;
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({limit: '50mb', extended: true}));
//Routes
const loginRoute = require('./routes/login');
const signupRoute = require('./routes/signup');
const homeRoute = require('./routes/home');
const uploadRoute = require('./routes/upload');
const getPhotosRoute = require('./routes/getPhotos');
//DB CONNECTION
const db = require('./db/dbService')
db.authenticate()
    .then(() => console.log('Db connected...'))
    .catch(err => console.log('Error: ' + err))
//Server
app.use('/login', loginRoute)

app.use('/signup', signupRoute)

app.use('/home', homeRoute)

app.use('/upload', uploadRoute)

app.get('/photos/:user_id', getPhotosRoute)

//Loading Server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
