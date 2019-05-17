'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class User extends BaseValidator {
  get rules () {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
