const express = require("express");
const tourController = require("./../controllers/tourController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log("Id is: " + val);
  next();
});

router
  .route("/")
  .get(tourController.getTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
