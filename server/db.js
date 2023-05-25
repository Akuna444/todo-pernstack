const Pool = require("pg").Pool;

const pool = new Pool({
  user: "akuna444",
  password: "akunti@21",
  host: "localhost",
  port: "5432",
  database: "perntodo",
});

module.exports = pool;
