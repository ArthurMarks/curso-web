const router = require('express').Router()

router.get('/villages/:village', (req, res) => {
    // Função de consulta para vila específica
    res.json({ village: {} })
})

module.exports = router
