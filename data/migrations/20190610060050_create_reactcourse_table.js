
exports.up = function(knex, Promise) {
  return knex.schema.createTable('react_course', tbl => {
      tbl.increments();
      tbl.integer('section').notNullable();
      tbl.string('commentary', 5000);
      tbl.string('code');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('react_course');
};
