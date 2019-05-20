'use strict'

const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])
    const trx = await Database.beginTransaction()
    const user = await User.create(data, trx)
    await trx.commit()

    return user
  }
}

module.exports = UserController
