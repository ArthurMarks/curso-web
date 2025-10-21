import { createContext, useContext, useMemo, useState, useEffect } from "react"

const QueryContext = createContext()

export const QueryProvider = ({ children }) => {
    // Área de manipulação de pesquisas

    const [query, setQuery] = useState('')

    // Área de manipulação de filtros

    const [filters, setFilters] = useState({
        character: false,
        village: false,
        clan: false,
        skill: {
            enabled: false,
            ninjutsu: false,
            senjutsu: false,
            doujutsu: false,
            kekkei_genkai: false,
            kekkei_moura: false
        }
    })

    const toggleFilter = (key) => {
        setFilters(prev => {
            const filter = { ...prev }

            if (key != 'skill') {
                filter[key] = !prev[key]
            } else {
                filter.skill = filter.skill.enabled
                    ? Object.fromEntries(Object.keys(filter.skill).map(key => [key, false]))
                    : { ...filter.skill, enabled: true }
            }

            return filter
        })
    }

    const toggleSubFilter = (subKey) => {
        setFilters(prev => ({
            ...prev,
            skill: {
                ...prev.skill,
                [subKey]: !prev.skill[subKey]
            }
        }))
    }

    const clearFilter = () => {
        setFilters(prev => {
            const filter = { ...prev }

            return Object.fromEntries(Object.keys(filter).map(key =>
                key != 'skill'
                    ? [key, false]
                    : [key, Object.fromEntries(Object.keys(filter.skill).map(sub => [sub, false]))]
            ))
        })
    }

    const hasActiveFilter = useMemo(() => (
        Object.keys(filters).some(key => filters[key].enabled ?? filters[key])
    ), [filters])

    // Valor que será guardado na memória para futuros acessos

    const contextValue = useMemo(() => ({
        query, setQuery, filters, toggleFilter, toggleSubFilter, clearFilter, hasActiveFilter
    }), [query, filters])

    return (
        <QueryContext.Provider value={contextValue}>
            {children}
        </QueryContext.Provider>
    )
}

export const useQuery = () => useContext(QueryContext)
