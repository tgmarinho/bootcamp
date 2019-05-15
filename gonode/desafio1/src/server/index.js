const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
})

const hasQueryParam = (req, res, next) => {
  if (!req.query.age) return res.redirect('/')

  next()
}

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

app.get('/', (req, res) => {
  res.render('age')
})

app.post('/check', (req, res) => {
  try {
    let age = parseInt(req.body.age)
    if (isNaN(age)) {
      throw Error('vc não digitou um número válido <br><a href="/">voltar</a>')
    }

    if (age >= 18) {
      return res.redirect(`/major?age=${age}`)
    } else {
      return res.redirect(`/minor?age=${age}`)
    }
  } catch (e) {
    return res.send(e.message)
  }
})

app.get('/minor', hasQueryParam, (req, res) => {
  const { age } = req.query
  return res.render('minor', { age })
})

app.get('/major', hasQueryParam, (req, res) => {
  const { age } = req.query
  return res.render('major', { age })
})

app.listen(3005)
