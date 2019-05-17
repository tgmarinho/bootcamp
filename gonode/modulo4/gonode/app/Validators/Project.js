'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Project extends BaseValidator {
  get rules () {
    return {
      title: 'required',
      description: 'required'
    }
  }
}

module.exports = Project
