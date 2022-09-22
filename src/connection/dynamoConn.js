const AWS = require('aws-sdk')

const dynamoConnection = () => {
  const dynamodb =  new AWS.DynamoDB.DocumentClient()

  return dynamodb
}

module.exports = {dynamoConnection}