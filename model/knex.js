const knex = require('knex')({
    client: 'pg',
    connection: "postgresql://postgres:KlPwowK59TwKQ9smX1BY@containers-us-west-54.railway.app:5556/railway",
    searchPath: ['knex', 'public'],
  });

module.exports = knex;