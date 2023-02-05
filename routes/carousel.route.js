
const { Router } = require("express");
const carouselController = require("../controllers/carousel.controller");

// init express router
const carouselRoute = Router();

carouselRoute.use('/carousel', carouselRoute);
carouselRoute.post("/create", carouselController.createCarousel);
carouselRoute.get("/", carouselController.getCarousel);

module.exports = carouselRoute;
  
