'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, params }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.findOrFail(params.id)

    user.merge(data)

    await user.save()

    return user
  }
}

module.exports = UserController
