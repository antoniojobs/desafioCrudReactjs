const connection = require('../database/connection');
module.exports = {
    create(request, response) {
        const autenticacao = request.body
        console.log(autenticacao);
        response.json(request.body);
    }
}