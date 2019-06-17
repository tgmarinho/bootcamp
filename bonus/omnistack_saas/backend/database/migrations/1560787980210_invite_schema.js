'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InviteSchema extends Schema {
  up () {
    this.create('invites', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('invites')
  }
}

module.exports = InviteSchema
