const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/user')

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(userRoutes)

app.get('/', (req, res) => {
    res.send('Server is up and running');
})

app.listen(process.env.PORT, (req, res) => {
    mongoose.connect(process.env.Mongo_URL)
    .then(() => {
        console.log('Server is connected');
        console.log('Database is connected');
    })
    .catch((err) => {
        console.log('There is an error in connecting db: ', err);
    })
})