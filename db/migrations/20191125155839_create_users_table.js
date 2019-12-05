exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', table => {
        table.increments();
        table.text('name').notNullable();
        table.text('email').unique().notNullable();
        table.text('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.boolean('is_active').notNullable().defaultTo(true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};