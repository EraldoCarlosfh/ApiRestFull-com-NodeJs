// const http = require('http'); // Criando o servidor utilizando http

// let server = http.createServer((req, res) => {

//     console.log('URL:', req.url);
//     console.log('METHOD:', req.method);

//     switch (req.url) {
//         case '/':
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'text/html');
//             res.end('<h1>Pagina Inicial</h1>');
//             break;

//         case '/users':
//             res.statusCode = 200;
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify({
//                 users: [{
//                     id: 1,
//                     name: 'Usuario1',
//                     email: 'usuario1@usuario1.com.br'
//                 }]
//             }));
//             break;
//     }

// });

// server.listen(3000, '127.0.0.1', () => {

//     console.log("servidor rodando!");

// });

const express = require('express'); // Criando o servidor utlizando express que já chama o http internamente.
const consign = require('consign'); // Utlizando o consign para chamar as rotas ao invés de usar require.
const bodyParser = require('body-parser'); // Utlizando o body-parser para tratar requisições via Postman.
const expressValidator = require('express-validator'); // Utlizando o body-parser para tratar requisições via Postman.


let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando na porta: http://localhost:3000");

});