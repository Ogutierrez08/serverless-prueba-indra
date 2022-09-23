const { vehiclesGetAllService, vehiclesGetIdService } = require('../services/vehiclesService')
const { errorResponse, response } = require('../utils/bodyResponseUtil')

const getAllVehicles = (event, context, callback) => {

  vehiclesGetAllService(process.env.SWAPI_URL).then((res) => {
    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data;
    callback(null, errorResponse(error))
  })

}

const getVehicle = (event, context, callback) => {
  const idVehicle = event.pathParameters.id;
  vehiclesGetIdService(process.env.SWAPI_URL, idVehicle).then((res) => {
    callback(null, response(res, 200))
  }).catch(e => {
    const error = e.response.data;
    callback(null, errorResponse(error))
  })

}

module.exports = { getVehicle, getAllVehicles }
