const { query } = require('./db')

const selectAll = async () => {
    const sql = 'SELECT * FROM curso'
    const result = await query(sql)
    return result.rows
}

const selectById = async (id) => {
    const sql = 'SELECT * FROM curso WHERE id = $1'
    const result = await query(sql, [id])
    return result.rows[0]
}

const insert = async (datas) => {
    const sql = 'INSERT INTO curso (nome, descricao) VALUES ($1, $2) RETURNING *'
    const result = await query(sql, [...datas])
    const response = `Registro de id ${result.rows[0].id} inserido!`
    return response
}

const update = async (datas) => {
    const sql = 'UPDATE curso SET descricao = $1 WHERE id = $2 RETURNING *'
    const result = await query(sql, [...datas])
    const response = `Registro de id ${result.rows[0].id} alterado!`
    return response
}

const exclude = async (id) => {
    const sql = 'DELETE FROM curso WHERE id = $1 RETURNING *'
    const result = await query(sql, [id])
    const response = `Registro de id ${result.rows[0].id} excluído!`
    return response
}

module.exports = { selectAll, selectById, insert, update, exclude }
