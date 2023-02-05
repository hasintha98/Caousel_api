const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Carousel = new Schema({
    title: {
        required: true,
        type: String,
    },
    subTitle: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    createdDate: {
        type: Date
    },
    lastUpdatedDate: {
        type: Date
    },
},
    {

    });

module.exports = mongoose.model('Carousel', Carousel);

