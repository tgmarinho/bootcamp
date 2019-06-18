'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.resource('teams', 'TeamController').apiOnly()
}).middleware('auth')
