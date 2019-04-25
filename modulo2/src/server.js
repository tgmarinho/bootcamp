const express = require('express')
const session = require('express-session')
// melhor usar RedisConnect ou banco não relacional para salvar sessões
const LockStore = require('connect-loki')(session)
const nunjucks = require('nunjucks')
const path = require('path')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.middlewares()
    this.views()
    this.routes()
  }

  middlewares () {
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret',
        resave: true,
        store: new LockStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions.db')
        }),
        saveUninitialized: true
      })
    )
  }

  views () {
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev,
      express: this.express,
      autoscape: true
    })

    this.express.set('view engine', 'njk')
    this.express.use(express.static(path.resolve(__dirname, 'public')))
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
