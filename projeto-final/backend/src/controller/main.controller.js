const router = require('express').Router()
const createRouter = require('../config/createRouter')

// Importação dos modelos
const characterModel = require('../model/character.model')
const skillModel = require('../model/skill.model')
const clanModel = require('../model/clan.model')
const villageModel = require('../model/village.model')

// Criação das rotas a partir da função genérica
router.use(createRouter('character', characterModel))
router.use(createRouter('skill', skillModel))
router.use(createRouter('clan', clanModel))
router.use(createRouter('village', villageModel))

module.exports = router
