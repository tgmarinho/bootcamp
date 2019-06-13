'use strict'

const Model = use('Model')

class Post extends Model {
  async user () {
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = Post
