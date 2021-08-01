const MySql = require('mysqli');

const conn = new Mysqli({
  host: 'localhost', // IP/domain name
  post: 3306, //port, default 3306
  user: 'root', //user name
  passwd: '', //password
  charset: '', // Database encoding, default utf8mb4 [Optional]
  db: 'ecommerce', // You can specify the database or not [optional]
});

const db = conn.emit(false, '');

module.exports = {
  database: db,
};
