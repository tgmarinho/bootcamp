'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required',
      email: 'required|unique:users|email',
      password: 'required'
    }
  }
}

module.exports = User
