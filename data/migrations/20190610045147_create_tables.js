exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('name').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('password').notNullable();
    })
    .createTable('react_course', tbl => {
        tbl.increments();
        tbl.integer('section').notNullable();
        tbl.string('commentary', 5000);
        tbl.string('code');
    })
    .createTable('users_react', tbl => {
        tbl.increments();
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('react_course_file_id')
            .notNullable()
            .references('id')
            .inTable('react_course')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.string('submitted_code');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users_react')
        .dropTableIfExists('react_course')
        .dropTableIfExists('users')
};
