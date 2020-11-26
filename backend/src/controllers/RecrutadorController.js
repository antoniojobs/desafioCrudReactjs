const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const recrutadores = await connection('recrutadores').select('*');
        console.log(recrutadores);
        return response.json(recrutadores);
    },
    async create(request, response) {
        const { nome, area_atuacao } = request.body;
        const retornoInsert = await connection('recrutadores').insert({
            nome,
            area_atuacao
        })

        return response.json({ "status": 200, "retornoInsert": retornoInsert });
    }
};