'use strict'

const UserTeam = use('App/Models/UserTeam')

class PermissionController {
  async show ({ request, auth }) {
    const teamJoin = await UserTeam.query()
      .where('team_id', request.team.id)
      .where('user_id', auth.user.id)
      .first()

    return {
      roles: await teamJoin.getRoles(),
      permissions: await teamJoin.getPermissions()
    }
  }
}

module.exports = PermissionController
