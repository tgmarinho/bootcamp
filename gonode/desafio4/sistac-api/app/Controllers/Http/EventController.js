'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Event = use('App/Models/Event')
const Database = use('Database')

/**
 * Resourceful controller for interacting with events
 */
class EventController {
  /**
   * Show a list of all events.
   * GET events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const { page } = request.get()
    const events = await Event.query()
      .with('user')
      .orderByRaw('datetime DESC')
      .paginate(page)

    return events
  }

  /**
   * Create/save a new event.
   * POST events
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    try {
      const data = request.only(['title', 'location', 'datetime'])
      const event = await Database.from('events').where({
        datetime: data.datetime,
        user_id: auth.user.id
      })

      console.log(event.length)
      if (event.length) {
        return response.status(400).send({
          error: { message: 'Não pode inserir dois eventos em mesma data' }
        })
      }
      const newEvent = await Event.create({ ...data, user_id: auth.user.id })
      return newEvent
    } catch (err) {
      return response.status(err.status).send({
        error: { message: 'Ocorreu um erro inexperado!' }
      })
    }
  }

  /**
   * Display a single event.
   * GET events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const event = await Event.findOrFail(params.id)
    await event.load('user')
    return event
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.only(['user_id', 'title', 'location', 'datetime'])

    const event = await Event.findOrFail(params.id)
    event.merge(data)
    await event.save()

    return event
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const event = await Event.findOrFail(params.id)
    await event.delete()
  }
}

module.exports = EventController
