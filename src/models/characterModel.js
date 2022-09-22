const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB({region: "sa-east-1"})

const createTable = async () => {
  await dynamodb
    .createTable({
      AttributeDefinitions: [
        { AttributeName: 'id', AttributeType: 'S' },
        { AttributeName: 'nombre', AttributeType: 'S' },
        { AttributeName: 'genero', AttributeType: 'S' },
        { AttributeName: 'peliculas', AttributeType: 'S' },
        { AttributeName: 'color_ojo', AttributeType: 'S' },
        { AttributeName: 'color_cabello', AttributeType: 'S' },
        { AttributeName: 'color_piel', AttributeType: 'S' },
        { AttributeName: 'altura', AttributeType: 'S' },
        { AttributeName: 'peso', AttributeType: 'S' },
        { AttributeName: 'planeta_natal', AttributeType: 'S' },
        { AttributeName: 'especies', AttributeType: 'S' },
        { AttributeName: 'naves_estelares', AttributeType: 'S' },
        { AttributeName: 'vehiculos', AttributeType: 'S' },
        { AttributeName: 'url', AttributeType: 'S' },
        { AttributeName: 'fecha_nacimiento', AttributeType: 'S' },
      ],
      KeySchema: [
        { AttributeName: 'id', KeyType: 'HASH' },
        { AttributeName: 'nombre', KeyType: 'RANGE' },
        { AttributeName: 'genero', KeyType: 'RANGE' },
        { AttributeName: 'peliculas', KeyType: 'RANGE' },
        { AttributeName: 'color_ojo', KeyType: 'RANGE' },
        { AttributeName: 'color_cabello', KeyType: 'RANGE' },
        { AttributeName: 'color_piel', KeyType: 'RANGE' },
        { AttributeName: 'altura', KeyType: 'RANGE' },
        { AttributeName: 'peso', KeyType: 'RANGE' },
        { AttributeName: 'planeta_natal', KeyType: 'RANGE' },
        { AttributeName: 'especies', KeyType: 'RANGE' },
        { AttributeName: 'naves_estelares', KeyType: 'RANGE' },
        { AttributeName: 'vehiculos', KeyType: 'RANGE' },
        { AttributeName: 'url', KeyType: 'RANGE' },
        { AttributeName: 'fecha_nacimiento', KeyType: 'RANGE' },
      ],
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 10,
      },
      TableName: 'charactersTable',
      BillingMode: 'PROVISIONED',
    })
    .promise()

  await dynamodb.waitFor('tableExists', { TableName: 'charactersTable' }).promise()

}

createTable().catch(error => console.error(JSON.stringify(error, null, 2)))