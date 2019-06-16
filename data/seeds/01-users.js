
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'user 1', email: 'sample@email.com1', password: '123'},
        {name: 'user 2', email: 'sample@email.com2', password: '123'},
        {name: 'user 3', email: 'sample@email.com3', password: '123'}
      ]);
    });
};
