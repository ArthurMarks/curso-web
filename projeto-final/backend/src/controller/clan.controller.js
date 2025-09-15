const router = require('express').Router()

router.get('/clans/:clan', (req, res) => {
    // Função de consulta para clã específico
    res.json({ clan: {} })
})

module.exports = router
