const nodemailer = require("nodemailer");
const mailConfig = require("../../config/mail.js");

class MailService {
  sendMail(message) {
    const transporter = nodemailer.createTransport(mailConfig);

    return transporter.sendMail(message);
  }
}

module.exports = new MailService();
