const { query } = require('../config/db')

// Retorna todos os clãs e as informações associadas a eles
const getAllClansInfo = async () => {
    const results = await query(
        `
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
        GROUP BY cl.id
        `
    )
    return results.rows
}

// Retorna as habilidades associadas a um clã
const getAllClanInfo = async (clanId) => {
    const results = await query(
        `
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
        WHERE cl.id = $1
        GROUP BY cl.id
        `,
        [clanId]
    )
    return results.rows
}

module.exports = { getAll: getAllClansInfo, getOne: getAllClanInfo }
