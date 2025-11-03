const { query } = require('../config/db')

const queries = {
    character: `SELECT id, name, 'character' AS type FROM character`,
    village: `SELECT id, name, 'village' AS type FROM village`,
    clan: `SELECT id, name, 'clan' AS type FROM clan`,
    skill: `SELECT id, name, 'skill' AS type FROM skill`
}

const condition = `WHERE ($1::text IS NULL OR name ILIKE '%' || $1 || '%')`
const skillCondition = `AND ($2::text[] IS NULL OR type_skill = ANY($2))`

const searchAll = async (term) => {
    const unionQueries = Object.values(queries)
        .map(q => `${q} ${condition}`)
        .join(' UNION ALL ')

    const results = await query(unionQueries, [term])
    return results.rows
}

const advancedSearch = async (term, filters) => {
    // O parâmetro filters é o estado de filters no contexto em useQuery.js (parte do mobile)
    const queryTerm = term.length > 0 ? term : null

    const activedKeys = Object.keys(filters).filter(key => filters[key].enabled ?? filters[key])
    if (activedKeys.length == 0) return searchAll(queryTerm)

    const activeSkillKeys = Object.keys(filters.skill).filter(sub => sub != 'enabled' && filters.skill[sub])
    const skills = activeSkillKeys.length > 0 ? activeSkillKeys : null

    const filteredQueries = activedKeys
        .map(k => {
            const base = `${queries[k]} ${condition}`
            return skills ? `${base} ${skillCondition}` : base
        })
        .join(' UNION ALL ')

    const params = skills ? [queryTerm, skills] : [queryTerm]

    const results = await query(filteredQueries, params)
    return results.rows
}

module.exports = { advancedSearch }
