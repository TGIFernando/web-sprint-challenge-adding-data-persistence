
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'ferns project', description: 'this will be epic'},
        {project_name: 'eat some food', description: 'MAKE SOME FOOD'}
      ]);
    });
};
