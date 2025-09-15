const router = require('express').Router()

router.get('/clans', (req, res) => {
    // Função de consulta para todos os clãs
    res.json([])
})

module.exports = router
