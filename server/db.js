const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "wautidtiwujjyn",
//   password: "3c994c97c55af6f9edf806780c2c4ec409010f0774dd86e7e8422e45eca2664d",
//   host: "ec2-52-30-75-37.eu-west-1.compute.amazonaws.com",
//   port: 5432,
//   database: "dddb6ktgat8hr7",
//   ssl: true,
// });
const pool =
  process.env.NODE_ENV === "production"
    ? new Pool({
        connectionString: prodConfig,

        ssl: {
          rejectUnauthorized: false,
        },
      })
    : new Pool({
        connectionString: devConfig,
        user: "wautidtiwujjyn",
        password:
          "3c994c97c55af6f9edf806780c2c4ec409010f0774dd86e7e8422e45eca2664d",
        host: "ec2-52-30-75-37.eu-west-1.compute.amazonaws.com",
        port: 5432,
        database: "dddb6ktgat8hr7",
        ssl: true,
      });

module.exports = pool;
