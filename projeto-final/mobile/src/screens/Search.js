import { ScrollView, StyleSheet, View, Text } from "react-native"
import { useState, useEffect } from "react"
import useServer from "../hooks/useServer"
import RenderDatas from "../components/RenderDatas"
import { externNavigation } from "../hooks/useExternNavigator"
import { useQuery } from "../hooks/useQuery"

const Search = () => {
    const { query, setQuery, filters, searchActive, setSearchActive, hasActiveFilter } = useQuery()
    const [datas, setDatas] = useState([])
    const server = useServer()

    // Função que altera 'datas' de acordo com o texto digitado e filtros selecionados
    const fetchData = async () => {
        const datas = { query, filters }
        const results = await server.advancedSearch(datas)
        setDatas(results)
    }

    // Função que oculta a tela de consulta e navega até o item selecionado
    const handleNavigate = (item) => {
        setQuery('')
        setSearchActive(false)
        externNavigation(item)
    }

    // Efeito executado quando há pesquisas ou consultas
    useEffect(() => {
        if (query.length > 0 || hasActiveFilter(filters)) {
            fetchData()
            setSearchActive(true)
        } else {
            setSearchActive(false)
            setDatas([])
        }
    }, [query, filters])

    return (
        <ScrollView style={[styles.container, searchActive ? styles.visible : styles.hidden]}>
            {searchActive && (
                datas.length > 0 ? (
                    <RenderDatas datas={datas} onNavigate={handleNavigate} />
                ) : (
                    query.length > 0 && (
                        <View>
                            <Text>Sem resultados para '{query}'</Text>
                            <Text>Verifique se o nome ou filtros estão corretos</Text>
                        </View>
                    )
                )
            )}
        </ScrollView>
    )
}
// Função que lida com as pesquisas feitas por filtro ou texto

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#fff", 
        position: "absolute", 
        top: 130, // valor igual a altura do header
        right: 0, 
        left: 0, 
        bottom: 0, 
        zIndex: 10 
    },
    visible: { 
        display: "flex" 
    },
    hidden: { 
        display: "none" 
    }
})

export default Search
