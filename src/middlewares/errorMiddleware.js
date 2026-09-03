export const notFoundHandler = (req, res) => {
  res.status(404).type('text/plain').send('Route not found');
};

export const errorHandler = (error, req, res, next) => {
  console.error(error);

  if (res.headersSent) {
    return next(error);
  }

  return res.status(500).type('text/plain').send('Internal server error');
};
