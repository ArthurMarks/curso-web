const router = require('express').Router()

router.get('/characters', (req, res) => {
    // Função de consulta para todos os personagens
    res.json([])
})

router.get('/characters/:character', (req, res) => {
    // Função de consulta para personagem específico
    res.json({})
})

module.exports = router
