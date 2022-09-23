const { v4 } = require('uuid')
const { dynamoConnection } = require('../connection/dynamoConn')
const { errorResponse, response } = require('../utils/bodyResponseUtil')

const characterListService = async (TableName, callback) => {
  const dynamodb = await dynamoConnection()
  dynamodb.scan({
    TableName
  }, (error, data) => {
    if (error) {
      callback(new Error(error));
      return;
    }


    callback(null, response(data.Items, 200));
  })
}

const characterAddService = async (TableName, event, callback) => {
  const dynamodb = await dynamoConnection()
  const {
    nombre,
    genero,
    peliculas,
    color_ojo,
    color_cabello,
    color_piel,
    altura,
    peso,
    planeta_natal,
    especies,
    naves_estelares,
    vehiculos,
    url,
    fecha_nacimiento,
  } = JSON.parse(event.body)

  const id = v4()


  const newCharacter = {
    id,
    nombre,
    genero,
    peliculas,
    color_ojo,
    color_cabello,
    color_piel,
    altura,
    peso,
    planeta_natal,
    especies,
    naves_estelares,
    vehiculos,
    url,
    fecha_nacimiento,
  }

  dynamodb.put({
    TableName,
    Item: newCharacter
  }, (error, data) => {
    if (error) {
      callback(new Error(error));
      return;
    }
    callback(null, response({ 'message': 'Character creado correctamente en la BD' }, 201));
  })

}

module.exports = { characterListService, characterAddService }