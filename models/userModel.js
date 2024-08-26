dotenv = require("dotenv");

const { Client } = require("pg");

const client = new Client({
  user: process.env.PG_DATABASE_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_DATABASE_HOST,
  port: process.env.PG_DATABASE_PORT,
  database: process.env.PG_DATABASE_NAME,
});

client
  .connect()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`Error connecting to database ${err}`);
  });
