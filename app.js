const express = require('express')
const { database } = require("./utils/database")
const { usersRouter } = require('./routes/users.routes')

const app = express()

app.use(express.json())

database.authenticate()
  .then(() => console.log('Authentication database successfully'))
  .catch(err => console.log(err))

database.sync()
  .then(() => console.log('Sync database successfully'))
  .catch(err => console.log(err))

// http://localhost:4000/api/v1/users
app.use('/api/v1/users', usersRouter)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`The server is running in port: ${PORT}`)
})