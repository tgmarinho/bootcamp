'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  teamJoin () {
    return this.hasMany('App/Models/UserTeam')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  teams () {
    return this.belongsToMany('App/Models/Team').pivotModel(
      'App/Models/UserTeam'
    )
  }

  async is (expression) {
    const team = await this.teamJoin()
      .where('team_id', this.currentTeam)
      .first()

    return team.is(expression)
  }

  async can (expression) {
    const team = await this.teamJoin()
      .where('team_id', this.currentTeam)
      .first()

    return team.can(expression)
  }

  async scope (required) {
    const team = await this.teamJoin()
      .where('team_id', this.currentTeam)
      .first()

    return team.scope(required)
  }
}

module.exports = User
