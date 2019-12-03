exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('team').del();

  await knex('team').insert([
    { ['manager_id']: 1, name: 'Buffalo Wild Wings' },
    { ['manager_id']: 1, name: 'Heberts Restaurant' },
  ]);
};

