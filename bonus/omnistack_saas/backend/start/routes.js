'use strict'

const Route = use('Route')

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.resource('teams', 'TeamController')
    .apiOnly()
    .validator(new Map([[['teams.store', 'teams.update'], ['Team']]]))
}).middleware('auth')

Route.group(() => {
  Route.post('invites', 'InviteController.store').validator('Invite')
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map([[['teams.store', 'teams.update'], ['Project']]]))
}).middleware(['auth', 'team'])
