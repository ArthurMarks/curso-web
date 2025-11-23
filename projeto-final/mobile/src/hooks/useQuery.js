import { createContext, useContext, useMemo, useState } from "react"

const QueryContext = createContext()

export const QueryProvider = ({ children }) => {
    // Estados e variáveis referentes à consultas de texto e filtros
    const [searchActive, setSearchActive] = useState(false)
    const [query, setQuery] = useState('')

    const filtersInitialState = {
        character: false,
        village: false,
        clan: false,
        skill: {
            enabled: false,
            ninjutsu: false,
            senjutsu: false,
            doujutsu: false,
            kekkei_genkai: false,
            kekkei_moura: false,
        }
    }

    const [filters, setFilters] = useState(filtersInitialState)
    const [tempFilters, setTempFilters] = useState(filters)

    // Função que interage com a alteração de estado dos botões em Filter.js
    const toggleFilter = (key) => {
        setTempFilters((prev) => {
            const filter = { ...prev }
            if (key != 'skill') {
                filter[key] = !prev[key]
            } else {
                filter.skill = filter.skill.enabled
                    ? Object.fromEntries(Object.keys(filter.skill).map((k) => [k, false]))
                    : { ...filter.skill, enabled: true }
            }
            return filter
        })
    }

    // Função que faz a mesma coisa que a anterior, mas específica para os filtros de 'skill'
    const toggleSubFilter = (subKey) => {
        setTempFilters((prev) => ({
            ...prev,
            skill: { ...prev.skill, [subKey]: !prev.skill[subKey] },
        }))
    }

    // Função que limpa todos os filtros aplicados, retornando ao estado inicial
    const clearTempFilters = () => {
        setTempFilters(filtersInitialState)
    }

    // Função que verifica se possui algum filtro ativo, sendo passado o próprio filtro como parâmetro para verificação
    const hasActiveFilter = (filterObj) => (
        Object.keys(filterObj).some((key) => filterObj[key].enabled ?? filterObj[key])
    )

    // Função que altera o estado em nuvem dos filtros
    const applyTempFilters = () => {
        setFilters(tempFilters)
    }

    const contextValue = useMemo(() => ({
        searchActive, setSearchActive, query, setQuery, filters, tempFilters, setTempFilters, 
        toggleFilter, toggleSubFilter, clearTempFilters, hasActiveFilter, applyTempFilters,
    }), [searchActive, query, filters, tempFilters])

    return <QueryContext.Provider value={contextValue}>{children}</QueryContext.Provider>
}

export const useQuery = () => useContext(QueryContext)
