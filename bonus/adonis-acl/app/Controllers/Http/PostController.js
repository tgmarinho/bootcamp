'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index ({ request }) {
    const posts = await Post.all()

    return posts
  }

  async store ({ request, auth }) {
    const data = request.only(['title', 'content', 'type'])

    const post = await Post.create({ ...data, user_id: auth.user.id })

    return post
  }

  async show ({ params }) {
    const post = await Post.findOrFail(params.id)

    return post
  }

  async update ({ params, request, response }) {
    const data = request.only(['title', 'content', 'type'])

    const post = await Post.findOrFail(params.id)

    post.merge(data)

    await post.save()

    return post
  }

  async destroy ({ params }) {
    const post = await Post.findOrFail(params.id)

    await post.delete()
  }
}

module.exports = PostController
