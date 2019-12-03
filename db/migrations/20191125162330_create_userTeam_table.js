
exports.up = function (knex, Promise) {
    return knex.schema.createTable('userTeam', table => {
        table.increments();
        table.integer('user_id').references('id').inTable('user');
        table.integer('team_id').references('id').inTable('team');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('userTeam');
};
