const router = require('express').Router()

router.get('/villages', (req, res) => {
    // Função de consulta para todos as vilas
    res.json([])
})

router.get('/villages/:village', (req, res) => {
    // Função de consulta para vila específica
    res.json({})
})

module.exports = router
