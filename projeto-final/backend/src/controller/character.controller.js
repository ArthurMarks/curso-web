const router = require('express').Router()

router.get('/characters/:character', (req, res) => {
    // Função de consulta para personagem específico
    res.json({})
})

module.exports = router
