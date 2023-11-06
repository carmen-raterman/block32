const { Client } = require('pg');

const client = new Client({
  user: 'csophia',
  database: 'gamestore',
  // password: 'postgres',
  port: 5432
});

module.exports = client;