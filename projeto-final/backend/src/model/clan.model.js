const { query } = require('../config/db')

const BASE_QUERY = `
    SELECT cl.*,
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'id', ch.id,
                'name', ch.name,
                'date_creation', ch.date_creation
            )
        ) FILTER (WHERE ch.id IS NOT NULL), '[]'
    ) AS characters,
    COALESCE(
        json_agg(
            DISTINCT jsonb_build_object(
                'id', sk.id,
                'name', sk.name,
                'type_skill', sk.type_skill,
                'date_creation', sk.date_creation
            )
        ) FILTER (WHERE sk.id IS NOT NULL), '[]'
    ) AS skills
    FROM clan AS cl
    LEFT JOIN clan_character AS cc ON cc.clan_id = cl.id
    LEFT JOIN character AS ch ON ch.id = cc.character_id
    LEFT JOIN clan_skill AS cs ON cs.clan_id = cl.id
    LEFT JOIN skill AS sk ON sk.id = cs.skill_id
`

// Retorna todos os clãs e as informações associadas a eles
const getAllClansInfo = async () => {
    const sql = `${BASE_QUERY} GROUP BY cl.id`
    const results = await query(sql)
    return results.rows
}

// Retorna as habilidades associadas a um clã
const getAllClanInfo = async (clanId) => {
    const sql = `${BASE_QUERY} WHERE cl.id = $1 GROUP BY cl.id`
    const results = await query(sql, [clanId])
    return results.rows[0]
}

module.exports = { getAll: getAllClansInfo, getOne: getAllClanInfo }
