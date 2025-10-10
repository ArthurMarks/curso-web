const router = require('express').Router()
const model = require('../model/character.model')

router.get('/character', async (_, res) => {
    const characters = await model.getAllCharacters()
    res.json(characters)
})

router.get('/character/:id', async (req, res) => {
    const characterId = req.params.id
    const character = await model.getAllCharacterInfo(characterId)

    res.json(character)
})

module.exports = router
