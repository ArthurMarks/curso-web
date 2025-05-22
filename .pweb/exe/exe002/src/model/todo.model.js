const { query } = require('../db')
const userModel = require('./user.model')

const findAll = async () => {
    const todos = await query('SELECT * FROM todos ORDER BY created_at DESC')
    return todos.rows
}

const findById = async (id) => {
    const todo = await query('SELECT * FROM todos WHERE id = $1', [id])
    return todo.rows[0]
}

const create = async (todo) => {
    const { title, description, user_id, completed } = todo

    if (!title) throw({ error: 'Tarefa precisa ter um título.' })
    
    const user = await userModel.findById(user_id)
    if (!user) throw({ error: 'A tarefa foi atribuída a um usuário inexistente.' })

    if (typeof completed != Boolean) throw({ error: 'O valor do status é inválido.' })

    const result = await query(
        'INSERT INTO todos (title, description, user_id) VALUES ($1, $2, $3) RETURNING *',
        [title, description, user_id]
    )
    return result.rows[0]
}

const update = async (id, todo) => {
    const { title, description, completed } = todo
    const result = await query(
        'UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *',
        [title, description, completed, id]
    )
    return result.rows[0]
}

const remove = async (id) => {
    await query('DELETE FROM todos WHERE id = $1', [id])
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}