const router = require('express').Router()

router.get('/villages', (req, res) => {
    // Função de consulta para todos as vilas
    res.json({ villages: [] })
})

module.exports = router
