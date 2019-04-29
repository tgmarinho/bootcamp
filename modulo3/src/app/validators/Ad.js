const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    prive: Joi.number().required()
  }
}
