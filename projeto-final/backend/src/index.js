const express = require('express')
const app = express()
const cors = require('cors')
const routes = require('./controller/routes')

app.use(cors())
app.use(express.json())
app.use('/', routes)

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
