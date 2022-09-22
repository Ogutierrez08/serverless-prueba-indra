const { characterAddService, characterListService } = require('../services/characterService')

const addCharacter = async (event) => {
  try {
    const newCharacter = await characterAddService(event)

    return {
      status: 200,
      body: newCharacter
    }
  } catch (error) {
    return {
      status: 400,
      body: error
    }
  }

}

const allCharacters = async () => {
  try {
    const characters = await characterListService()

    return {
      status: 200,
      body: {
        characters
      }
    }
  } catch (error) {
    return {
      status: 400,
      body: error
    }
  }

}


module.exports = { addCharacter, allCharacters }