const router = require('express').Router()

router.get('/skills', (req, res) => {
    // Função de consulta para todos as habilidades
    res.json([])
})

module.exports = router
