import { ScrollView, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

import useServer from "../hooks/useServer"
import RenderDatas from "../components/RenderDatas"
import { externNavigation } from "../hooks/useExternNavigator"
import { useQuery } from "../hooks/useQuery"

const Search = () => {
    const { query, setQuery, filters, clearFilter, hasActiveFilter } = useQuery()
    const [datas, setDatas] = useState([])
    const server = useServer()

    const fetchData = async () => {
        const datas = { query, filters }

        const results = await server.advancedSearch(datas)
        setDatas(results)
    }

    const handleQuery = (data) => {
        setQuery('')
        clearFilter()
        externNavigation(data)
    }

    useEffect(() => {
        fetchData()
    }, [query, filters])

    const dataExists = query.length > 0 || hasActiveFilter

    return (
        <ScrollView style={[styles.container, dataExists ? styles.visible : styles.hidden]}>
            {dataExists && (
                <RenderDatas
                    datas={datas}
                    onNavigate={item => handleQuery(item)}
                />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 150,
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
    },
    visible: {
        display: 'flex'
    },
    hidden: {
        display: 'none'
    },
})

export default Search
