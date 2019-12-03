
exports.up = function(knex, Promise) {
    return knex.schema.createTable('team', table => {
      table.increments();
      table.integer('manager_id').references('id').inTable('user').notNullable();
      table.text('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('team');
  };