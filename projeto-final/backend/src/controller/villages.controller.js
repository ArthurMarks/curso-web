const router = require('express').Router()

router.get('/villages', (req, res) => {
    // Função de consulta para todos as vilas
    res.json([])
})

module.exports = router
