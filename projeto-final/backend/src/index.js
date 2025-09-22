const express = require('express')
const app = express()
const cors = require('cors')

const characterController = require('./controller/character.controller')
const villageController = require('./controller/village.controller')
const clanController = require('./controller/clan.controller')
const skillController = require('./controller/skill.controller')

app.use(cors())
app.use(express.json())

app.use('/', characterController)
app.use('/', villageController)
app.use('/', clanController)
app.use('/', skillController)

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
