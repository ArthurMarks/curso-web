const { query } = require('../config/db')

// Retorna todas as vilas
const getAllVillages = async () => {
    const results = await query('SELECT * FROM village')
    return results.rows
}

// Retorna uma vila pelo id dela
const getByVillageId = async (villageId) => {
    const result = await query('SELECT * FROM village WHERE id = $1', [villageId])
    return result.rows[0]
}

module.exports = { getAll: getAllVillages, getOne: getByVillageId }
