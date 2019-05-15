const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

// para saber lidar como info de formulário html
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'njk')

const users = ['Thiago Marinho', 'Diego Fernandes', 'Robson Marques']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

app.listen(3005)
