const router = require('express').Router()
const model = require('../model/village.model')

router.get('/village', async (_, res) => {
    const villages = await model.getAllVillages()
    res.json(villages)
})

router.get('/village/:id', async (req, res) => {
    const villageId = req.params.id
    const village = await model.getByVillageId(villageId)

    res.json(village)
})

module.exports = router
