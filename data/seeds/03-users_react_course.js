
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_react').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users_react').insert([
        {user_id: 1, react_course_file_id: 1, submitted_code: 'this is some random submitted code one'},
        {user_id: 2, react_course_file_id: 2, submitted_code: 'this is some random submitted code two'},
        {user_id: 3, react_course_file_id: 3, submitted_code: 'this is some random submitted code three'}
      ]);
    });
};
