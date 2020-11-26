exports.up = function(knex) {
    return knex.schema.createTable('avaliacoes', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.decimal('nota').notNullable();

        table.string('usuario_id').notNullable;
        table.foreign('usuario_id').references('id').inTable('usuarios');

        table.string('recrutador_id').notNullable;
        table.foreign('recrutador_id').references('id').inTable('recrutador');
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('avaliacoes');
};