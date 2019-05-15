module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // disponibilizando o user para todas as telas do nunjucks
    res.locals.user = req.session.user
    return next()
  }

  return res.redirect('/')
}
