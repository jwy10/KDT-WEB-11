require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER,
    passwor: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT
  },
  test: {
    username: process.env.USER,
    passwor: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT
  },
  production: {
    username: process.env.PRODUSER,
    passwor: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
    port: process.env.PORT
  }
}
