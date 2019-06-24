'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')

const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Thiago Marinho',
      email: 'tgmarinho@gmail.com',
      password: '123456'
    })

    const createInvite = await Permission.create({
      slug: 'invites_create',
      name: 'Convidar Membros'
    })

    const createProject = await Permission.create({
      slug: 'projects_create',
      name: 'Criar projetos'
    })

    const admin = await Role.create({
      slug: 'administrator',
      name: 'Administrador'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderator'
    })

    await Role.create({
      slug: 'visitor',
      name: 'Visitante'
    })

    await admin.permissions().attach([createInvite.id, createProject.id])
    await moderator.permissions().attach([createProject.id])

    const team = await user.teams().create({
      name: 'TGMARINHO',
      user_id: user.id
    })

    const teamJoin = await user
      .teamJoin()
      .where('team_id', team.id)
      .first()

    await teamJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
