'use strict'

const BaseValidator = use('App/Validators/BaseValidator')

class Task extends BaseValidator {
  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }
}

module.exports = Task
