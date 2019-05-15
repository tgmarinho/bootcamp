const { Appointment, User } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class DashboardBarberController {
  async index (req, res) {
    const appointments = await Appointment.findAll({
      include: [
        {
          model: User,
          as: 'user'
        }
      ],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format()
          ]
        }
      },
      order: [['date', 'ASC']]
    })

    const clients = appointments.map(a => {
      const {
        date,
        user: { name, avatar }
      } = a

      return {
        date: moment(date).format('DD/MM/YY - LT'),
        name,
        avatar
      }
    })

    return res.render('barber/dashboard', { clients })
  }
}

module.exports = new DashboardBarberController()

// date: {
//   [Op.between]: [
//     moment()
//       .startOf('day')
//       .format(),
//     moment()
//       .endOf('day')
//       .format()
//   ]
// }
