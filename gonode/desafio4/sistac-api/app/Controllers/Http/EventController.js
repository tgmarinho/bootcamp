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
   */
  async index ({ request, response, auth }) {
    const { page } = request.get()
    const events = await Event.query()
      .with('user')
      .where('user_id', auth.user.id)
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
   */
  async show ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)
    await event.load('user')

    if (event.user_id === auth.user.id) {
      return event
    } else {
      return response.status(401).send({
        error: { message: 'Só o criador do evento pode vê-lo!' }
      })
    }
  }

  /**
   * Update event details.
   * PUT or PATCH events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    const data = request.only(['user_id', 'title', 'location', 'datetime'])

    const event = await Event.findOrFail(params.id)

    if (event.user_id === auth.user.id) {
      event.merge(data)
      await event.save()

      return event
    } else {
      return response.status(401).send({
        error: { message: 'Só o criador do evento pode alterá-lo!' }
      })
    }
  }

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const event = await Event.findOrFail(params.id)
    if (event.user_id === auth.user.id) {
      await event.delete()
    } else {
      return response.status(401).send({
        error: { message: 'Só o criador do evento pode deletá-lo!' }
      })
    }
  }
}

module.exports = EventController
