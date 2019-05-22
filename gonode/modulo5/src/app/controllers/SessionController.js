const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).send({ message: "user not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).send({ message: "incorrect password" });
    }
    return res.json({
      token: await user.generateToken()
    });
  }
}

module.exports = new SessionController();
