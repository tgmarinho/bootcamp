'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])

    const teamsQuery = Invite.query().where('email', data.email)

    const teams = await teamsQuery.pluck('team_id') // traz um array dos ids do time

    if (teams.length === 0) {
      return response
        .status(401)
        .send({ message: 'You are not invited to any team' })
    }

    const user = await User.create(data)

    await user.teams().attach(teams)

    await teamsQuery.delete()

    const token = await auth.attempt(data.email, data.password)

    return token
  }
}

module.exports = UserController
