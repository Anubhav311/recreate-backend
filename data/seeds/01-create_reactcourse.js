
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('react_course').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('react_course').insert([
        {section: 'rowValue1', commentary: 'this is some randome commentary one', code: 'this is some random code one'},
        {section: 'rowValue2', commentary: 'this is some randome commentary two', code: 'this is some random code two'},
        {section: 'rowValue3', commentary: 'this is some randome commentary three', code: 'this is some random code three'}
      ]);
    });
};
