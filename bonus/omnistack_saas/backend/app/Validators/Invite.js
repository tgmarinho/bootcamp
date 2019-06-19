'use strict'

class Invite {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      invetes: 'required|array',
      'invites.*': 'required|email'
    }
  }
}

module.exports = Invite
