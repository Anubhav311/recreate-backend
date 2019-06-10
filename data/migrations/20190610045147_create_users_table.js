
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('name').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('password').notNullable();
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
