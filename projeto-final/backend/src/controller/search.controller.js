const router = require('express').Router()
const { advancedSearch } = require('../model/search.model')

// Esquema que retorna os resultados de todas as pesquisas, seja com ou sem filtro
router.post('/search', async (req, res) => {
    const { query, filters } = req.body
    const results = await advancedSearch(query, filters)
    
    res.json(results)
})

module.exports = router
