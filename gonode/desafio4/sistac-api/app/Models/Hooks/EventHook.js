'use strict'

const moment = require('moment')

const EventHook = (exports = module.exports = {})

EventHook.validate = async modelInstance => {
  if (moment(modelInstance.datetime).isBefore(moment())) {
    throw new Error('Não é possível excluir ou alterar um evento passado')
  }
}
