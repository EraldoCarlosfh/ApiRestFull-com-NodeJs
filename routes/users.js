let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

module.exports = (app) => {

    let route = app.route('/users');
    let routeId = app.route('/users/:id');

    // Busca de todos os usuários
    route.get((req, res) => {

        // no metodo find está sendo passado um objeto vazio neste caso retornará todos os usuarios cadastrados, caso 
        // queira filtrar por nome por exemplo então e necessário passar dentro do objeto no metodo find os parametros
        // {name: carlos} ou {name: luan}

        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    // users: users   // quando a chave e o mesmo nome da variável pode ser usado somente um conforme abaixo
                    users
                });
            }
        });
    });

    // Adição de um usuário
    route.post((req, res) => {

        // validando os campos com express-validator
        if (!app.utils.validator.user(app, req, res)) return false;

        db.insert(req.body, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        })
    });

    // Busca de usuário por Id
    routeId.get((req, res) => {

        db.findOne({ _id: req.params.id }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    // users: users   // quando a chave e o mesmo nome da variável pode ser usado somente um conforme abaixo
                    users
                });
            }
        });
    });

    // Editando usuário
    routeId.put((req, res) => {

         // validando os campos com express-validator
         if (!app.utils.validator.user(app, req, res)) return false;

        db.update({ _id: req.params.id }, req.body, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign(req.params, req.body));
            }
        })
    });

    // Deletando usuário
    routeId.delete((req, res) => {

        db.remove({ _id: req.params.id }, {}, req.body, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        })
    });
};