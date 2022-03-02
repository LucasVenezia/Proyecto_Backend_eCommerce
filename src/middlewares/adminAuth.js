const isAdmin = true 

const adminAuth = (req, res, next) => {
  console.log(req);
  if (!isAdmin)
    res.json({ error: -1, description: `Ruta ${ req.originalUrl } función ${ req.method } no autorizada` })
  else next()
};

module.exports = adminAuth;