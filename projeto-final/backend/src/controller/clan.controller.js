const router = require('express').Router()

router.get('/clans', (req, res) => {
    // Função de consulta para todos os clãs
    res.json([])
})

router.get('/clans/:clan', (req, res) => {
    // Função de consulta para clã específico
    res.json({})
})

module.exports = router
