exports.up = function(knex) {
    return knex.schema.createTable('recrutadores', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('area_atuacao').notNullable();
        table.string('senha_recrutador').notNullable();
        table.string('email_cretudador').notNullable();
    })
};

exports.down = function(knex) {
    knex.schema.dropTable('recrutadores');
};