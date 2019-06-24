'use strict'

const Role = use('Adonis/Acl/Role')

class RoleController {
  async index () {
    const roles = await Role.all()

    return roles
  }
}

module.exports = RoleController
