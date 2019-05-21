'use strict'

class Event {
  get rules () {
    return {
      title: 'required',
      location: 'required',
      datetime: 'required'
    }
  }
}

module.exports = Event
