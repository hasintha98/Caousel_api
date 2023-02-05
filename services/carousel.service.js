const Carousel = require("../models/carousel.model");
const date = require('date-and-time')


const createCarousel = async (carouselDTO) => {
    //adding catalogue
    const newCarousel = new Carousel();
    newCarousel.title = carouselDTO.title;
    newCarousel.subTitle = carouselDTO.subTitle;
    newCarousel.image = carouselDTO.image;
    newCarousel.createdDate = date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
    const addedRecord = await newCarousel.save();

    if (!addedRecord) {
        return { succeded: false, addedEntry: null, message: 'ERROR' };
    }

    return { succeded: true, addedEntry: addedRecord, message: 'SUCCESS' };
}

const getAllCarousel = async (slides) => {
    const carouselList = await Carousel.find().limit(Number(slides));
    if (!carouselList) {
        return null;
    }
    return carouselList;
};


module.exports = {
    createCarousel,
    getAllCarousel,
};