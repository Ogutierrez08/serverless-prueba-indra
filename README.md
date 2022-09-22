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

- character

| servicio      | detalle                       |
|:--------------|:----------------------------------|
| `add/character`      | Crea un nuevo registro en la tabla character de DynamoDB. |
| `list/characters`    | Lista todos los characters de la tabla character de DynamoDB |

### Despliegue

Tener en cuenta instalar `serverless` de manera global o usar `npx`.
También deber tener un usuario con los permisos correspondientes. [IAM](https://docs.aws.amazon.com/es_es/IAM/latest/UserGuide/introduction.html)

```sh
sls deploy
```

### Para más detalles

- [API Doc Swagger](https://app.swaggerhub.com/apis-docs/infantito/star-wars/1.0.0)