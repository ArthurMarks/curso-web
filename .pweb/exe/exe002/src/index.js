const express = require('express')
const app = express()
const userController = require('./controller/user.controller')
const todoController = require('./controller/todo.controller')

app.use(express.json())

app.use('/', userController)
app.use('/', todoController)

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})