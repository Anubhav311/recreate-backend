
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users_react', tbl => {
        tbl.increments();
        tbl.integer('user_id').notNullable();
        tbl.string('react_course_file_id', 5000);
        tbl.string('submitted_code');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users_react');
};
