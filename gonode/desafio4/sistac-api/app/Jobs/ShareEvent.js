'use strict'

const Mail = use('Mail')

class ShareEvent {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'ShareEvent-job'
  }

  async handle ({ emailTo, userFrom, title, location, datetime }) {
    console.log(`JOB: ${ShareEvent.key}`)

    await Mail.send(
      ['emails.share_event'],
      { title, userFrom, location, datetime },
      message => {
        message
          .to(emailTo)
          .from('suporte@sistema.com.br', 'Suporte - não responda')
          .subject('Um evento foi compartilhado com você')
      }
    )
  }
}

module.exports = ShareEvent
