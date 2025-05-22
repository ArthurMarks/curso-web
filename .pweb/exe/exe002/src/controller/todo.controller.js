const router = require('express').Router()
const todoModel = require('../model/todo.model')
const todoView = require('../view/todo.view')

// Listar todas as tarefas
router.get('/todos', async (request, response) => {
    const todos = await todoModel.findAll()
    const todosVO = todoView.arrayToJson(todos)
    response.json(todosVO)
})

// Buscar uma tarefa específica
router.get('/todos/:id', async (request, response) => {
    const { id } = request.params
    const todo = await todoModel.findById(id)

    if (!todo) {
        return response.status(404).json({ error: 'Tarefa não encontrada' })
    }

    const todoVO = todoView.toJson(todo)
    response.json(todoVO)
})

// Criar uma nova tarefa
router.post('/todos', async (request, response) => {
    try {
        const todo = request.body
        const newTodo = await todoModel.create(todo)
        const todoVO = todoView.toJson(newTodo)
        response.status(201).json(todoVO)
    } catch (error) {
        response.status(404).json(error)
    }
})

// Atualizar uma tarefa
router.put('/todos/:id', async (request, response) => {
    const { id } = request.params
    const todo = request.body

    const updatedTodo = await todoModel.update(id, todo)
    if (!updatedTodo) {
        return response.status(404).json({ error: 'Tarefa não encontrada' })
    }

    const todoVO = todoView.toJson(updatedTodo)
    response.json(todoVO)
})

// Remover uma tarefa
router.delete('/todos/:id', async (request, response) => {
    const { id } = request.params
    await todoModel.remove(id)
    response.status(204).send()
})

module.exports = router