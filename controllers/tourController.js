exports.getTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    tours: "tours",
  });
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "failed",
      message: "Missing name or price",
    });
  }

  next()
};

exports.createTour = (req, res) => {
  res.status(200).json({
    status: "created",
    tours: req.body,
  });
};

exports.getTour = (req, res) => {
  res.status(200).json({
    status: "success",
    tours: `one tour ${req.params.id}`,
  });
};

exports.updateTour = (req, res) => {
  res.status(201).json({
    status: "updated",
  });
};

exports.deleteTour = (req, res) => {
  res.status(201).json({
    status: "deleted " + req.params.id,
  });
};
