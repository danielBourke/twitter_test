exports.getError = (req, res, next) => {
  res.status(404);
  res.send("Error")
};
