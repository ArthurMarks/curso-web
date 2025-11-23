import { useState, useRef } from 'react'
import { useQuery } from '../hooks/useQuery'
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import Filter from './Filter'

const Header = () => {
    const [filterActived, setFilterActived] = useState(false)
    const { query, setQuery, setSearchActive } = useQuery()
    const inputRef = useRef(null)

    const handleQuery = (text) => {
        setQuery(text)
        setSearchActive(text.length > 0)
    }

    const clearQuery = () => {
        handleQuery('')
        inputRef.current?.blur()
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.start}>
                    <Image source={require('../../assets/konoha.png')} style={styles.imageStart} />
                    <Text style={styles.textStart}>Narutopedia</Text>
                </View>
                <View style={styles.search}>
                    <TextInput
                        ref={inputRef}
                        placeholder='Personagens, habilidades...'
                        placeholderTextColor={'#1A1A1A' + 'aa'}
                        style={styles.input}
                        value={query}
                        onChangeText={handleQuery}
                    />
                    <TouchableOpacity onPress={() => setFilterActived(true)} style={styles.filter}>
                        <Image source={require('../../assets/filter.png')} style={styles.imageFilter} />
                    </TouchableOpacity>
                    {query.length > 0 && (
                        <Pressable style={styles.delete} onPress={clearQuery}>
                            <Image source={require('../../assets/delete.png')} style={styles.imageDelete} />
                        </Pressable>
                    )}
                </View>
            </View>
            <Filter visible={filterActived} close={() => setFilterActived(false)} />
        </>
    )
}
// Componente que define o cabeçalho, bem como título e funcionalidades de pesquisa (consulta via texto e filtros)

const styles = StyleSheet.create({
    container: {
        height: 130, 
        backgroundColor: '#9B2226', 
        paddingHorizontal: 15, 
        paddingTop: 15,
        shadowColor: '#1A1A1A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 8
    },
    start: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10 
    },
    textStart: { 
        fontSize: 30,
        fontWeight: '900',
        color: '#FFFBEB',
        letterSpacing: 1
    },
    imageStart: { 
        width: 40, 
        height: 40 
    },
    search: { 
        height: 80, 
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 10, 
        position: 'relative' 
    },
    input: { 
        backgroundColor: '#FFFBEB', 
        height: 45,
        borderRadius: 8, 
        paddingLeft: 15, 
        paddingRight: 40, 
        flex: 5,
        fontSize: 16
    },
    filter: { 
        backgroundColor: '#E97D21', 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderRadius: 8, 
        padding: 7,
        shadowColor: '#1A1A1A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4
    },
    imageFilter: { 
        width: 25, 
        height: 25,
        tintColor: '#FFFBEB'
    },
    delete: { 
        position: 'absolute', 
        right: 65
    },
    imageDelete: { 
        width: 20, 
        height: 20,
        tintColor: '#1A1A1A' + 'aa'
    }
})

export default Header
