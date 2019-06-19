'use strict'

class Project {
  get validateAll () {
    return true
  }
  get rules () {
    return {
      title: 'required'
    }
  }
}

module.exports = Project
