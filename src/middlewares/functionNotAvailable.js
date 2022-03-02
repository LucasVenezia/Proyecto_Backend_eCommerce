const functionNotAvailable = (req, res, next) => {
  res.json({ error: -2, description: `Ruta ${ req.originalUrl } función ${ req.method } no implementada.` })
};

module.exports = functionNotAvailable;