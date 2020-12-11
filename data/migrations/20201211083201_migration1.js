
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('name', 128).notNullable()
    tbl.string('description', 128)
    tbl.boolean("completed").default(false)
  })
    .createTable('resources', tbl=>{
        tbl.increments()
        tbl.string('name', 128).notNullable()
        tbl.string('description', 128)
    })
    .createTable('tasks', tbl=>{
        tbl.increments()
        tbl.string('description', 128).notNullable()
        tbl.string('notes', 128)
        tbl.boolean('completed').default(false)
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('task_resources', tbl=>{
        tbl.increments()
        tbl.text('description', 128)
        tbl.integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
