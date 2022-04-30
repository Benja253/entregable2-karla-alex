const { Sequelize } = require('sequelize')

const database = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'b1e3n0j6a3',
  database: 'entregable2',
  logging: false
})

module.exports = {
  database
}