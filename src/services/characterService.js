const {v4} = require('uuid')
const {dynamodb} = require('../connection/dynamoConn')

const characterListService = async () => {
  const result = await dynamodb.scan({
    TableName: "charactersTable"
  }).promise()

  const characters = result.Items

  return characters
}

const characterAddService = async (event) => {
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

  await dynamodb.put({
    TableName: "charactersTable",
    Item: newCharacter
  }).promise()

  return newCharacter
}

module.exports = {characterListService , characterAddService}