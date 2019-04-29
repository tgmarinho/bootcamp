const Ad = require('../models/Ad')
const User = require('../models/User')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')
const Purchase = require('../models/Purchase')

class PurchaseController {
  async index (req, res) {
    const purchases = await Purchase.find()

    res.json(purchases)
  }

  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    await Purchase.create({ ...req.body, author: req.userId })

    return res.send()
  }

  async sold (req, res) {
    const { ad, sold } = req.body
    console.log(req.params.id)
    console.log(req.body)

    const purchase = await Purchase.findOneAndUpdate(
      req.params.id,
      { sold },
      {
        new: true // retorna purchase atualizado
      }
    )

    const adupdate = await Ad.findOneAndUpdate(ad, { purchaseBy: purchase.id })
    console.log(adupdate)
    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
