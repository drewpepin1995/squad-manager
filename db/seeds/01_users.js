const bcrypt = require('bcrypt');

exports.seed = async function (knex) {
  const password = await bcrypt.hash('Test1234', 12);
  await knex('user').del();


  await knex('user').insert([
    { email: "drewpepin1995@gmail.com", password, firstName: "Drew", lastName: "Pepin"}
  ]);
};

