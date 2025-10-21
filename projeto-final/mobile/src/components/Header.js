import { useState, useRef } from "react"
import { useQuery } from "../hooks/useQuery"
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Pressable } from "react-native"

import Filter from "./Filter"

const Header = () => {
    const [filterActived, setFilterActived] = useState(false)
    const { query, setQuery } = useQuery()
    const inputRef = useRef(null)

    const handleQuery = (text) => {
        setQuery(text)
    }
    /** Função que relaciona o texto digitado a setQuery(), em App.js */

    const clearQuery = () => {
        handleQuery('')
        inputRef.current.blur()
    }
    /** Função que limpa o input e desativa o teclado (em celular) */

    return (
        <>
            <View style={styles.container}>
                <View style={styles.start}>
                    <Image
                        source={require('../../assets/konoha.png')}
                        style={styles.imageStart}
                    />
                    <Text style={styles.textStart}>Narutopedia</Text>
                </View>
                <View style={styles.search}>
                    <TextInput
                        ref={inputRef}
                        placeholder='Personagens, habilidades...'
                        style={styles.input}
                        value={query}
                        onChangeText={handleQuery}
                    />
                    <TouchableOpacity onPress={() => setFilterActived(true)} style={styles.filter}>
                        <Image
                            source={require('../../assets/filter.png')}
                            style={styles.imageFilter}
                        />
                    </TouchableOpacity>
                    {query.length > 0 && (
                        <Pressable style={styles.delete} onPress={clearQuery}>
                            <Image
                                source={require('../../assets/delete.png')}
                                style={styles.imageDelete}
                            />
                        </Pressable>
                    ) /** Renderização que ativa o ícone de exclusão (ativado somente quando há texto) */}
                </View>
            </View>
            <Filter visible={filterActived} close={() => setFilterActived(false)} />
        </>
    )
}
/** Componente que engloba cabeçalho, além de caixa de texto e filtro e e seus funcionamentos */

const styles = StyleSheet.create({
    container: {
        height: 150,
        backgroundColor: '#A6886D',
        paddingHorizontal: 10,
        paddingTop: 30,
    },
    start: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    textStart: {
        fontSize: 30,
    },
    imageStart: {
        width: 40,
        height: 40,
    },
    search: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        position: 'relative'
    },
    input: {
        backgroundColor: '#D9B79A',
        height: 40,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 40,
        flex: 5,

    },
    filter: {
        backgroundColor: '#F2D5BB',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 5,
    },
    imageFilter: {
        width: 30,
        height: 30,
    },
    delete: {
        position: 'absolute',
        right: 60,
    },
    imageDelete: {
        width: 20,
        height: 20,
    },
})

export default Header
