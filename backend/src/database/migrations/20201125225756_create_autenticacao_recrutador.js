exports.up = function(knex) {
    return knex.schema.createTable('retrutado_pass', function(table) {
        table.string('id').primary();
        table.string('email').notNullable();
        table.string('senha').notNullable();

        table.foreign('id').references('id').inTable('recrutador');
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('retrutado_pass');
};