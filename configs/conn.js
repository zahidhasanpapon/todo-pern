const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "329DNa8nNbzPzg",
  host: "localhost",
  port: 5432,
  database: "todopern_db2",
});

module.exports = pool;
