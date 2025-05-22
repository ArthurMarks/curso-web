const { query } = require('../db')

const findAll = async () => {
    const users = await query('SELECT * FROM users')
    return users.rows
}

const findById = async (id) => {
    const user = await query('SELECT * FROM users WHERE id = $1', [id])
    return user.rows[0]
}

module.exports = {
    findAll,
    findById
}