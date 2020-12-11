
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {description: 'do a project', notes: 'ehhhhh', project_id: 1},
        {description: 'MAKE DAT FOOD', project_id: 2}
      ]);
    });
};
