const path = require('path')

class FileController {
  show (req, res) {
    const { file } = req.params
    const filePath = path.resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    )

    return res.sendFile(filePath)
  }
}

module.exports = new FileController()
