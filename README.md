# Star Wars API 


### Pasos

Instalar dependencias

```sh
npm ci
```

### Configurar .env (.env.example)


### Iniciar proyecto localmente

```sh
npm start
```


### Ejecutar tests

El servidor debe estar funcionando

```sh
npm run test
```

### Apis

- Servicios en DynamoDB

| servicio      | detalle                       |
|:--------------|:----------------------------------|
| `add/character`      | Crea un nuevo registro en la tabla character de DynamoDB. |
| `list/characters`    | Lista todos los characters de la tabla character de DynamoDB |


- Servicios integrados de SWAPI

| servicio      | detalle                       |
|:--------------|:----------------------------------|
| `swapi/people`      | Lista la información de todos los personajes de StarWars |
| `swapi/people/{id}`    | Obtiene por id la información de un personaje de Star Wars |
| `swapi/planet`      | Lista la información de todos los planetas de StarWars |
| `swapi/planet/{id}`    | Obtiene por id la información de un planeta de Star Wars |
| `swapi/vehicle`      | Lista la información de todos los vehiculos de StarWars |
| `swapi/vehicle/{id}`    | Obtiene por id la información de un vehiculo de Star Wars |

### Despliegue

Tener en cuenta instalar `serverless` de manera global o usar `npx`.
También deber tener un usuario con los permisos correspondientes. [IAM](https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html)

```sh
sls deploy
```

### Para más detalles

- [API Doc Swagger](https://g5sc9m1igk.execute-api.sa-east-1.amazonaws.com/swagger)