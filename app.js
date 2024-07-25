const express = require("express");
const morgan = require("morgan");
const tourRouter = require('./routes/tourRoutes')

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);

module.exports = app
