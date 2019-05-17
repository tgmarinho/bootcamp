'use strict'

class Task {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      due_date: 'date'
    }
  }
}

module.exports = Task
