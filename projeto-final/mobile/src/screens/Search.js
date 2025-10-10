import { View, Text, Pressable, FlatList, StyleSheet } from "react-native"
import { navigate } from "../navigation/RootNavigator"

import personagens from "../data"

const Search = ({ query, onClearQuery }) => {
    const results = personagens.filter(p =>
        p.nome.toLowerCase().includes(query.toLowerCase())
    )
    /** Exemplo de pesquisa automática (com dados de personagens em data.js) */

    const handleQuery = (data) => {
        onClearQuery()
        navigate(data)
    }
    /** Função de limpeza do input, navegação e passagem de parâmetros para a sub aba */

    return (
        <View style={[styles.container, query.length > 0 ? styles.visible : styles.hidden]}>
            {query && (
                <FlatList 
                    data={results}
                    keyExtractor={r => r.id}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => handleQuery(item)}>
                            <Text>{item.nome}</Text>
                        </Pressable>
                    )}
                />
            )}
        </View>
    )
}
/** Componente que mostra as pesquisas de acordo com o digitado no <TextInput> em Header.js */

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
