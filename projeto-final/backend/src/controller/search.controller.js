const router = require('express').Router()
const { advancedSearch } = require('../model/search.model')

router.post('/search', async (req, res) => {
    const { query, filters } = req.body
    const results = await advancedSearch(query, filters)
    
    res.json(results)
})

module.exports = router
