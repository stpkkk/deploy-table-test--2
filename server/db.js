const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "070166",
  host: "localhost",
  port: 5432,
  database: "delivery",
});

module.exports = pool;
