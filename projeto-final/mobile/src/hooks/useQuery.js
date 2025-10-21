import { createContext, useContext, useMemo, useState } from "react"

const QueryContext = createContext()

export const QueryProvider = ({ children }) => {
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
        },
    }

    const [filters, setFilters] = useState(filtersInitialState)
    const [tempFilters, setTempFilters] = useState(filters)

    const toggleFilter = (key) => {
        setTempFilters((prev) => {
            const filter = { ...prev }
            if (key !== "skill") {
                filter[key] = !prev[key]
            } else {
                filter.skill = filter.skill.enabled
                    ? Object.fromEntries(Object.keys(filter.skill).map((k) => [k, false]))
                    : { ...filter.skill, enabled: true }
            }
            return filter
        })
    }

    const toggleSubFilter = (subKey) => {
        setTempFilters((prev) => ({
            ...prev,
            skill: { ...prev.skill, [subKey]: !prev.skill[subKey] },
        }))
    }

    const clearTempFilters = () => {
        setTempFilters(filtersInitialState)
    }

    const hasActiveFilter = (filterObj) =>
        Object.keys(filterObj).some((key) => filterObj[key].enabled ?? filterObj[key])

    

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
