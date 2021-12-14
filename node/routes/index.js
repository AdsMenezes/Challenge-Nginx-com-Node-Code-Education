const { Router } = require('express')
const { getRepository } = require('typeorm')

const People = require('../entities/People')

const routes = Router()

routes.get('/', async (request, response) => {
  const peopleRepository = getRepository(People)

  const peoples = await peopleRepository.find({
    order: {
      id: "DESC"
    }
  })

  return response.render("index", { peoples })
})

routes.post('/', async (request, response) => {
  const { name } = request.body

  const peopleRepository = getRepository(People)

  const people = peopleRepository.create({ name })
  await peopleRepository.save(people)

  return response.redirect('/')
})

module.exports = routes
