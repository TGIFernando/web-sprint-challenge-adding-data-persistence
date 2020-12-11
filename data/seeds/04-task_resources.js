
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('task_resources').insert([
        {description: 'ayy im hungry', task_id: 2, resource_id: 3},
        {description:'i go to sleep now', task_id: 1, resource_id: 2}
      ]);
    });
};
