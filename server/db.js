const Pool = require("pg").Pool;

const pool = new Pool({
  user: "wautidtiwujjyn",
  password: "3c994c97c55af6f9edf806780c2c4ec409010f0774dd86e7e8422e45eca2664d",
  host: "ec2-52-30-75-37.eu-west-1.compute.amazonaws.com",
  port: 5432,
  database: "dddb6ktgat8hr7",
  connectionString: process.env.DATABASE_URL, // Heroku addons
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
