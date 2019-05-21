'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  static boot () {
    super.boot()
  }

  static get dates () {
    return super.dates.concat(['datetime'])
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Event
