const { characterAddService, characterListService } = require('../services/characterService')

const addCharacter =  (event , context, callback) => {
  
    characterAddService(process.env.CHARACTER_TABLE,event,callback)

}

const allCharacters = (event, context, callback) => {

  characterListService(process.env.CHARACTER_TABLE,callback)

}


module.exports = { addCharacter, allCharacters }