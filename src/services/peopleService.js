const {request} = require('../utils/requestUtils')

const peopleGetAllService = async (endpoint) => {
  const response = await request(`${endpoint}/people`)
  return response
}

const peopleGetIdService = async (endpoint , id) => {
  const response = await request(`${endpoint}/people/${id}`)
  return response
}

module.exports = {peopleGetAllService,peopleGetIdService}