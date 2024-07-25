const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const tourRouter = express.Router();
app.use("/api/v1/tours", tourRouter);

tourRouter
  .route("/")
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

tourRouter.get("/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    tours: `one tour ${req.params.id}`,
  });
});

const port = 3000;
app.listen(port, () => {
  console.log("App running on port " + port);
});
