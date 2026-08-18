const errorHandler = (err, req, res, next) => {
  console.error(err.stack || err.message);

  const status = err.response?.status || 500;
  const message =
    err.response?.status === undefined
      ? "Internal server error"
      : "Error communicating with AI provider";

  res.status(status).json({ error: message });
};

module.exports = errorHandler;
