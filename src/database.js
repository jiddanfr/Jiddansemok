const { MULTI_STATEMENTS } = require('mysql2/lib/constants/client');
const mysql = require('promise-mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'electrondb'
});

function getConnection() {
  return connection;
}

module.exports = { getConnection };