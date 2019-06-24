'use strict'

class Invite {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      invites: 'required|array',
      'invites.*': 'required|email'
    }
  }
}

module.exports = Invite
