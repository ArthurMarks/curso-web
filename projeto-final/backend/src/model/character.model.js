const { query } = require('../config/db')

// Retorna todos os personagens
const getAllCharacters = async () => {
    const results = await query('SELECT * FROM character')
    return results.rows || []
}

// Retorna um personagem pelo id dele
const getByCharacterId = async (characterId) => {
    const result = await query('SELECT * FROM character WHERE id = $1', [characterId])
    return result.rows[0] || {}
}

// Retorna as habilidades associadas a um personagem
const getCharacterSkills = async (characterId) => {
    const results = await query(
        `
        SELECT s.*
        FROM skill AS s
        INNER JOIN character_skill AS cs ON cs.skill_id = s.id
        WHERE cs.character_id = $1
        `,
        [characterId]
    )
    return results.rows
}

// Une todas as informações associadas a um personagem
const getAllCharacterInfo = async (characterId) => {
    const character = await getByCharacterId(characterId)
    const skill = await getCharacterSkills(characterId)

    return { ...character, skill }
}

module.exports = { getAllCharacters, getAllCharacterInfo }
