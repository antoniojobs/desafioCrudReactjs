const { request } = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const avalicaoes = await connection('avalicaoes').select('*');
        if (avalicaoes) {
            console.log(avalicaoes);
            return response.json(avalicaoes);
        } else {
            return response.json({ "avalições": "nenhuma disponível" });
        }
    },

    async create(request, response) {
        const { nome, nota, usuario_id } = request.body;
        const recrutador_id = request.headers.authorization;
        /*         console.log(request.body);
                console.log(request.headers); */

        // insert  no  banco
        const [avaliacao_id] = await connection('avaliacoes').insert({
            nome,
            nota,
            usuario_id,
            recrutador_id
        });
        return response.json({ avaliacao_id } /*  = 202020 */ );
    }
};