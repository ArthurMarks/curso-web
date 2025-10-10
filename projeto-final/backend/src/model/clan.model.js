const { query } = require('../config/db')

// Retorna todas os clãs
const getAllClans = async () => {
    const results = await query('SELECT * FROM clan')
    return results.rows
}

// Retorna um clã pelo id dele
const getByClanId = async (clanId) => {
    const result = await query('SELECT * FROM clan WHERE id = $1', [clanId])
    return result.rows[0]
}

// Retorna os personagens associados a um clã
const getClanCharacters = async (clanId) => {
    const results = await query(
        `
        SELECT c.*
        FROM character AS c
        INNER JOIN clan_character AS cc ON cc.character_id = c.id
        WHERE cc.clan_id = $1
        `,
        [clanId]
    )
    return results.rows
}

// Retorna as habilidades associadas a um clã
const getClanSkills = async (clanId) => {
    const results = await query(
        `
        SELECT s.*
        FROM skill AS s
        INNER JOIN clan_skill AS cs ON cs.skill_id = s.id
        WHERE cs.clan_id = $1
        `,
        [clanId]
    )
    return results.rows
}

// Une todas as informações associadas a um clã
const getAllClanInfo = async (clanId) => {
    const clan = await getByClanId(clanId)
    const character = await getClanCharacters(clanId)
    const skill = await getClanSkills(clanId)

    return { ...clan, character, skill }
}

module.exports = { getAllClans, getAllClanInfo }
