const { query } = require('../config/db')

// Retorna todas as habilidades
const getAllSkills = async () => {
    const results = await query('SELECT * FROM skill')
    return results.rows
}

// Retorna uma habilidade pelo id dela
const getBySkillId = async (skillId) => {
    const result = await query('SELECT * FROM skill WHERE id = $1', [skillId])
    return result.rows[0]
}

module.exports = { getAll: getAllSkills, getOne: getBySkillId }
