'use strict'

class Team {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = Team
