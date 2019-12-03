require('dotenv').config();

const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/squad-manager',
    seeds: {
      directory: __dirname + '/db/seeds'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    }
  },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
      },
      seeds: {
          directory: __dirname + '/db/seeds/production'
      }
  }
};
