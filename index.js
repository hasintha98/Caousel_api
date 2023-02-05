const express = require('express');
require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3600;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./db.js');

const carouselRoute = require('./routes/carousel.route');


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {useNewUrlParser: true}).then(() => {
    console.log("database is connected")
},
err => {
    console.log("cannot connect to the database"+ err);
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', carouselRoute);

app.listen(PORT, function() {
    console.log("server is running on port : ", PORT);
});


