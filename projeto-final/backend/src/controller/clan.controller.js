const router = require('express').Router()
const model = require('../model/clan.model')

router.get('/clans', async (_, res) => {
    const clans = await model.getAllClans()
    res.json(clans)
})

router.get('/clans/:id', async (req, res) => {
    const clanId = req.params.id
    const clan = await model.getAllClanInfo(clanId)

    res.json(clan)
})

module.exports = router
