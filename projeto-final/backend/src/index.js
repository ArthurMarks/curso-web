const express = require('express')
const app = express()
const cors = require('cors')

const mainRoutes = require('./controller/main.controller')
const searchRoute = require('./controller/search.controller')

app.use(cors())
app.use(express.json())

app.use('/', mainRoutes)
app.use('/', searchRoute)

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
