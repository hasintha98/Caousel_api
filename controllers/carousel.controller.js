const carouselService = require("../services/carousel.service");

const { HTTP403Error, HTTP401Error } = require("../util/HtttpErrors");

const date = require('date-and-time')

const createCarousel= async (req, res, next) => {
  console.log(req.body)
  const { 
    title,
    subTitle,
    image

  } = req.body;

  console.log(title, subTitle, image)

  try {
    if (!title || !subTitle || !image) {
      throw new HTTP403Error("Details are required");
    }

    const result = await carouselService.createCarousel({ title, subTitle, image });
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

const getCarousel = async (req, res, next) => {
  try {

    const slides = req.query.slides
    const result = await carouselService.getAllCarousel(slides);
  
    if (!result) {
      throw new HTTP401Error("Unautherized");
    }

    res.json(result);

  } catch (error) {
    next(error);
  }
}




module.exports = {
  createCarousel,
  getCarousel,


};
