const {request} = require('../utils/requestUtils')

const planetGetAllService = async (endpoint) => {
  const response = await request(`${endpoint}/planets`)
  return response
}

const planetGetIdService = async (endpoint , id) => {
  const response = await request(`${endpoint}/planets/${id}`)
  return response
}

module.exports = {planetGetAllService,planetGetIdService}