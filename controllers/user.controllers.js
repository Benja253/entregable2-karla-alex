const { User } = require('../models/user.model')

// request = pregunta
// response = respuesta
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    res.status(200).json({
      users
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllUsers
}