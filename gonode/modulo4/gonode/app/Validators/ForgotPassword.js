'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class ForgotPassword extends BaseValidator {
  get rules () {
    return {
      email: 'required|email',
      redirect_url: 'required|url'
    }
  }
}

module.exports = ForgotPassword
