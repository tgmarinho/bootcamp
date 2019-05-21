'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeDelete', 'EventHook.validate')
  }

  static get dates () {
    return super.dates.concat(['datetime'])
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Event
