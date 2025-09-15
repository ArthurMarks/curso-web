const router = require('express').Router()

router.get('/skills/:skill', (req, res) => {
    // Função de consulta para habilidade específica
    res.json({ skill: {} })
})

module.exports = router
