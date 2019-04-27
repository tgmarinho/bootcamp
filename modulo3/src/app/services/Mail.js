const nodemailer = require('nodemailer')
const mailConfig = require('../../config/mail')

const transport = nodemailer.createTransport(mailConfig)

module.exports = transport
