'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Invite extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }

  team () {
    return this.bellongsTo('App/Models/Team')
  }
}

module.exports = Invite
