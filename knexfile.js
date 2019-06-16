// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: '5432',
      user: 'postgres',
      password: 'th!s!sAsecret',
      database: 'recreate_pg_db',
    },
    pool : {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE,
    pool : {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds : {
      directory: './data/seeds'
    },
    useNullAsDefault: true,
  },

};
