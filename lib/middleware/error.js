// eslint-disable-next-line no-console
module.exports = (err, req, res, next) => {
  const status = err.status || 500;

  res.status(status);

  // eslint-disable-next-line no-console
  console.log(`|| err >`, err);

  res.send({
    status,
    message: err.message,
  });
};
