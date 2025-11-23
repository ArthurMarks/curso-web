const { query } = require('../config/db')

const BASE_QUERY = `
    SELECT c.*,
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'id', s.id,
                'name', s.name,
                'type_skill', s.type_skill,
                'date_creation', s.date_creation
            )
        ) FILTER (WHERE s.id IS NOT NULL), '[]'
    ) AS skills
    FROM character AS c
    LEFT JOIN character_skill AS cs ON cs.character_id = c.id
    LEFT JOIN skill AS s ON s.id = cs.skill_id
`

// Une todos os personagens e as informações associadas a eles
const getAllCharactersInfo = async () => {
    const sql = `${BASE_QUERY} GROUP BY c.id`
    const results = await query(sql)
    return results.rows
}

// Une todas as informações associadas a um personagem
const getAllCharacterInfo = async (characterId) => {
    const sql = `${BASE_QUERY} WHERE c.id = $1 GROUP BY c.id`
    const results = await query(sql, [characterId])
    return results.rows[0]
}

module.exports = { getAll: getAllCharactersInfo, getOne: getAllCharacterInfo }
