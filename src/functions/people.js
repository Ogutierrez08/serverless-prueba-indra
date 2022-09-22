const {request} = require('../utils/requestUtils')
const getAllPeople = async (event) => {
  try {
    const data = await request(`${process.env.SWAPI_URL}/people`)
    console.log(data)
    return {
      status: 200,
      body: data
    }
  } catch (error) {
    return {
      status: 400,
      body: error.message
    }
  }
}

module.exports = {getAllPeople}
