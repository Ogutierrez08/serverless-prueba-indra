const {request} = require('../utils/requestUtils')

const vehiclesGetAllService = async (endpoint) => {
  const response = await request(`${endpoint}/vehicles`)
  return response
}

const vehiclesGetIdService = async (endpoint , id) => {
  const response = await request(`${endpoint}/vehicles/${id}`)
  return response
}

module.exports = {vehiclesGetAllService,vehiclesGetIdService}