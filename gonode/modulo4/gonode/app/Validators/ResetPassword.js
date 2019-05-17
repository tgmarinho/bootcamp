'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class ResetPassword extends BaseValidator {
  get rules () {
    return {
      token: 'required',
      password: 'required|confirmed'
    }
  }
}

module.exports = ResetPassword
