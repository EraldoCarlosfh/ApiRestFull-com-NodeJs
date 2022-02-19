# RESTful API de Usuários com NodeJs

API desenvolvida em Node.js

### Instalação

```
npm install
```

### Executando o servidor

```
npm start
```

## Rotas

Obter todos os usuários:

```
GET /users
```

Exemplo de resultado:

```
{
    "users":[]
}
```

Cadastrar um novo usuário:

```
POST /users
```

Exemplo de resultado:

```
{
    "_id":"hjkhfui324",
    "name":"João Rangel"
}
```

Obter dados de um usuário:

```
GET /users/:id
```

Exemplo de resultado:

```
{
    "_id":"hjkhfui324",
    "name":"João Rangel"
}
```

Editar um usuário:

```
PUT /users/:id
```

Exemplo de resultado:

```
{
    "_id":"hjkhfui324"
}
```

Excluir um usuário:

```
DELETE /users/:id
```

Exemplo de resultado:

```
{
    "_id":"hjkhfui324"
}
```