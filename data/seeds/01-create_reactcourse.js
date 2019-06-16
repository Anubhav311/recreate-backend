
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('react_course').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('react_course').insert([
        {section: 1, commentary: 'this is some random commentary one', code: 'this is some random code one'},
        {section: 1, commentary: 'this is some random commentary two', code: 'this is some random code two'},
        {section: 1, commentary: 'this is some random commentary three', code: 'this is some random code three'}
      ]);
    });
};
