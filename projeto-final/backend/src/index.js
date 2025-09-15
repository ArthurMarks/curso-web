const express = require('express')
const app = express()
const cors = require('cors')

const charactersController = require('./controller/characters.controller')
const characterController = require('./controller/character.controller')
const villagesController = require('./controller/villages.controller')
const villageController = require('./controller/village.controller')
const clansController = require('./controller/clans.controller')
const clanController = require('./controller/clan.controller')
const skillsController = require('./controller/skills.controller')
const skillController = require('./controller/skill.controller')

app.use(cors())
app.use(express.json())

app.use('/', charactersController)
app.use('/', characterController)
app.use('/', villagesController)
app.use('/', villageController)
app.use('/', clansController)
app.use('/', clanController)
app.use('/', skillsController)
app.use('/', skillController)

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
})
