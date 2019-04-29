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

    if (purchaseAd.purchasedBy) {
      return res.status(400).json({ error: 'Ad already purchased' })
    }

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    await Purchase.create({ ...req.body, user: req.userId })

    return res.send()
  }

  async sold (req, res) {
    const { ad, sold } = req.body

    const adAlreadyPuchased = await Purchase.findOne({ ad, sold: true })
    if (adAlreadyPuchased) {
      return res.status(400).json({ error: 'Ad already purchased' })
    }

    const purchase = await Purchase.findOneAndUpdate(
      { _id: req.params.id },
      { sold },
      {
        new: true // retorna purchase atualizado
      }
    )

    if (purchase) {
      await Ad.findOneAndUpdate(ad, {
        purchasedBy: purchase._id
      })
      return res.json(purchase)
    } else {
      return res.status(400).json({ error: 'Purchase not exists' })
    }
  }
}

module.exports = new PurchaseController()
