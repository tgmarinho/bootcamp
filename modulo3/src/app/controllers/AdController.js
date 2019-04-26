const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const filters = {}

    if (req.query.price_min || req.query.price_max) {
      filters.price = {}
      if (req.query.price_min) {
        filters.price.$gte = req.query.price_min
      }
      if (req.query.price_max) {
        filters.price.$lte = req.query.price_max
      }
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    console.log(filters)

    const ads = await Ad.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: ['author'],
      sort: '-createdAt'
    })
    return res.json(ads)
  }

  async show (req, res) {
    const ad = await Ad.findById(req.params.id)
    return res.json(ad)
  }

  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })
    console.log(ad)
    return res.json(ad)
  }
  async update (req, res) {
    const ad = await Ad.findOneAndUpdate(req.params.id, req.body, {
      new: true // retorna ad atualizado
    })

    return res.json(ad)
  }
  async destroy (req, res) {
    await Ad.findOneAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new AdController()
