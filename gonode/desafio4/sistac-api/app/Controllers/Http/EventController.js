'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Event = use('App/Models/Event')
const Database = use('Database')
const moment = require('moment')

const changeYearOf = date => moment(date).set({ year: '1910' })
const compareOf = (dateX, dateY) => {
  const newDateX = changeYearOf(dateX)
  const newDateY = changeYearOf(dateY)

  if (newDateX.isAfter(newDateY)) {
    return 1
  }
  if (newDateX.isBefore(newDateY)) {
    return -1
  }
  // a must be equal to b
  return 0
}
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
      console.log(err)
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
  async update ({ params, request, response }) {}

  /**
   * Delete a event with id.
   * DELETE events/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = EventController
