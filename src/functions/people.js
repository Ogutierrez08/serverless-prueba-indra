const { peopleGetAllService, peopleGetIdService } = require('../services/peopleService')
const { errorResponse, response } = require('../utils/bodyResponseUtil')

const getAllPeople = (event, context, callback) => {

  peopleGetAllService(process.env.SWAPI_URL).then((res) => {

    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data
    callback(null, errorResponse(error))
  })

}

const getPeople = (event, context, callback) => {
  const idPeople = event.pathParameters.id;
  peopleGetIdService(process.env.SWAPI_URL, idPeople).then((res) => {

    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data;
    callback(null, errorResponse(error))
  })

}

module.exports = { getAllPeople, getPeople }
