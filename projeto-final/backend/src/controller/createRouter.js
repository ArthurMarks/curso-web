// Esquema genérico de funcionamento de rotas, sendo reutilizável para quase todas as relações
const createRouter = (route, model) => {
    const router = require('express').Router()
    const { handleDatas } = require('../view/handleDatas')

    // Rota genérica para acessar todos os dados de uma relação
    router.get(`/${route}`, async (_, res) => {
        const results = await model.getAll()
        res.json(handleDatas(results, route))
    })

    // Rota genérica para acessar um dado pelo id de uma relação
    router.get(`/${route}/:id`, async (req, res) => {
        const result = await model.getOne(req.params.id)
        res.json(handleDatas(result, route))
    })

    return router
}
// Obs.: As funções do modelo só funcionam pois todos os modelos tem o mesmo nome quando retornam as funções (getAll() e getOne())

module.exports = createRouter
