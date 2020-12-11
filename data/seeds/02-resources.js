
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: 'car'},
        {name: 'bed', description: 'where i sleep'},
        {name: 'food', description: 'i eat this'}
      ]);
    });
};
