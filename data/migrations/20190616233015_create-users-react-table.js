
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_react', tbl => {
        tbl.increments();
        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('react_course_file_id')
            .notNullable()
            .references('id')
            .inTable('react_course')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.string('submitted_code');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users_react');
};
