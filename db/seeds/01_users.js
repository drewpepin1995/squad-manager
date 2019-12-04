const bcrypt = require('bcrypt');

exports.seed = async function (knex) {

  await knex('user').del();


  await knex('user').insert([
    { email: "drewpepin1995@gmail.com", name: "Drew Pepin"}
  ]);
};

