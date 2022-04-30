const { DataTypes } = require("sequelize")
const { database } = require("../utils/database")

const User = database.define('users', {
  id: {
    primaryKey: true, //Nunca se repite
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING
  },
  status: {
    defaultValue: 'available',
    allowNull: false,
    type: DataTypes.STRING 
  }
})

module.exports = {
  User
}