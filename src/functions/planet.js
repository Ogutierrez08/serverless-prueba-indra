const { planetGetIdService, planetGetAllService } = require('../services/planetService')
const { errorResponse, response } = require('../utils/bodyResponseUtil')

const getAllPlanets = (event, context, callback) => {

  planetGetAllService(process.env.SWAPI_URL).then((res) => {
    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data;
    callback(null, errorResponse(error))
  })

}

const getPlanet = (event, context, callback) => {
  const idPlanet = event.pathParameters.id;
  planetGetIdService(process.env.SWAPI_URL, idPlanet).then((res) => {
    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data;
    callback(null, errorResponse(error))
  })

}

module.exports = { getAllPlanets, getPlanet }
