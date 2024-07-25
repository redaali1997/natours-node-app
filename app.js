const express = require("express");
const morgan = require("morgan");

const app = express();

app
  .route("/api/v1/tours")
  .get((req, res) => {
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      tours: "tours",
    });
  })
  .post((req, res) => {
    res.status(200).json({
      status: "success",
      tours: req.body,
    });
  });

app.get("/api/v1/tours/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    tours: `one tour ${req.params.id}`,
  });
});


const port = 3000;
app.listen(port, () => {
  console.log("App running on port " + port);
});
