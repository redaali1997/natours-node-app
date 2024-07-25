exports.getTours = (req, res) => {
  res.status(200).json({
    status: "success",
    requestedAt: req.requestTime,
    tours: "tours",
  });
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
