'use strict'

const reqOnly = request => request.only(['name', 'slug', 'description'])

const Permission = use('Permission')

class PermissionController {
  async index () {
    return Permission.all()
  }

  async store ({ request }) {
    return Permission.create(reqOnly(request))
  }

  async update ({ request, params }) {
    const permission = await Permission.findOrFail(params.id)

    permission.merge(reqOnly(request))

    permission.save()

    return permission
  }

  async destroy ({ params }) {
    const permission = await Permission.findOrFail(params.id)
    permission.delete()
  }
}

module.exports = PermissionController
