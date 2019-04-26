const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    if (!req.body.name) {
      req.flash('error', 'Nome obrigatório')
      res.redirect('/signup')
    }

    if (!req.body.email) {
      req.flash('error', 'Email obrigatório')
      res.redirect('/signup')
    }

    if (!req.body.password) {
      req.flash('error', 'Senha obrigatória')
      res.redirect('/signup')
    }

    if (!req.file) {
      req.flash('error', 'Avatar obrigatório')
      res.redirect('/signup')
    }

    const { filename: avatar } = req.file

    const exists = User.findOne({ where: { email: req.body.email } })
    if (exists) {
      req.flash('error', 'Usuário cadastado com esse email')
      res.redirect('/signup')
    }

    await User.create({ ...req.body, avatar })
    return res.redirect('/')
  }
}

module.exports = new UserController()
