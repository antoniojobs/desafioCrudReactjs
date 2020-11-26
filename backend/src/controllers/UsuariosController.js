const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const usuarios = await connection('usuarios').select('*');
        // console.log(request.body);
        return response.json(usuarios);
    },

    async create(request, response) {
        const { nome, telefone, email, cidade, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        console.log(request.body);
        /*  await connection('usuarios').insert({
             id,
             nome,
             telefone,
             email,
             cidade,
             uf
         }) */

        return response.json({ id });
    },
    async update(request, response, next) {
        try {
            const { nome } = request.body
            const { id } = request.params
            const retornoQuery = await connection('usuarios')
                .update({ nome })
                .where({ id })
            return response.send(200);
        } catch (error) {
            next(error)
        }
    },
    async delete(request, response, next) {
        try {
            const { nome } = request.body
            const { id } = request.params
            await connection('usuarios')
                .where({ id })
                .del()
            response.send(200);
        } catch (error) {
            next(error)
        }
    }


};