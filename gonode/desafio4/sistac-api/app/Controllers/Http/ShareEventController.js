'use strict'

const Event = use('App/Models/Event')
const Kue = use('Kue')
const Job = use('App/Jobs/ShareEvent')

class ShareEventController {
  async share ({ request, response, auth }) {
    const data = request.only(['email', 'id'])

    const event = await Event.findOrFail(data.id)

    if (event.user_id === auth.user.id) {
      console.log('chamando o job')

      Kue.dispatch(
        Job.key,
        {
          emailTo: data.email,
          userFrom: auth.user.name,
          title: event.title,
          location: event.location,
          datetime: event.datetime
        },
        { attempts: 3 }
      )
    } else {
      return response.status(400).send({
        error: { message: 'Nenhum evento foi encontrado com ID informado.' }
      })
    }
  }
}

module.exports = ShareEventController
