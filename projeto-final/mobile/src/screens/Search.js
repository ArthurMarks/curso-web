import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import useServer from '../hooks/useServer'
import RenderDatas from '../components/RenderDatas'
import { externNavigation } from '../hooks/useExternNavigator'
import { useQuery } from '../hooks/useQuery'

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
                    <View style={styles.resultsWrapper}>
                        <Text style={styles.resultsText}>
                            {datas.length == 1 ? '1 resultado encontrado' : `${datas.length} resultados encontrados`}
                        </Text>
                        <RenderDatas datas={datas} onNavigate={handleNavigate} />
                    </View>
                ) : (
                    <View style={styles.noResultsContainer}>
                        <Text style={styles.noResultsIcon}>
                            <Text>⁀➴</Text>
                        </Text>
                        <Text style={styles.noResultsTitle}>
                            Nenhum Resultado Encontrado
                        </Text>
                        <Text style={styles.noResultsText}>
                            O ninja que você procura pode estar em uma missão secreta.
                        </Text>
                        <Text style={styles.noResultsText}>
                            Tente ajustar os termos da sua pesquisa e tente novamente.
                        </Text>
                    </View>
                )
            )}
        </ScrollView>
    )
}
// Função que lida com as pesquisas feitas por filtro ou texto

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFBEB',
        position: 'absolute',
        top: 130, // valor igual a altura do header
        right: 0,
        left: 0,
        bottom: 0,
        zIndex: 10,
        shadowColor: '#1A1A1A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5
    },
    visible: {
        display: 'flex'
    },
    hidden: {
        display: 'none'
    },
    resultsWrapper: {
        flex: 1,
        paddingTop: 10
    },
    resultsText: {
        fontSize: 20,
        paddingLeft: 20,
        paddingBottom: 10,
        marginBottom: 15,
        borderBottomWidth: 1
    },
    noResultsContainer: {
        minHeight: 300, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#FFFBEB',
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#9B2226' + '50'
    },
    noResultsIcon: {
        fontSize: 100,
        marginBottom: 10
    },
    noResultsTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#E97D21',
        marginBottom: 8,
        textAlign: 'center'
    },
    noResultsText: {
        fontSize: 15,
        color: '#1A1A1A',
        textAlign: 'center',
        lineHeight: 22
    }
})

export default Search
