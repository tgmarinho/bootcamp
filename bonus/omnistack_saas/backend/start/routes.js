'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')
Route.post('users', 'UserController.store')

Route.group(() => {
  Route.resource('teams', 'TeamController').apiOnly()
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store')
}).middleware(['auth', 'team'])
