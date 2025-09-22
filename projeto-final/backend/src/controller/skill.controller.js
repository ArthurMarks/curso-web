const router = require('express').Router()

router.get('/skills', (req, res) => {
    // Função de consulta para todos as habilidades
    res.json([])
})

router.get('/skills/:skill', (req, res) => {
    // Função de consulta para habilidade específica
    res.json({})
})

module.exports = router
