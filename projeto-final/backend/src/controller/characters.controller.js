const router = require('express').Router()

router.get('/characters', (req, res) => {
    // Função de consulta para todos os personagens
    res.json({ characters: [] })
})

module.exports = router
