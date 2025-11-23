import { useState, useMemo, useEffect } from "react"
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import useServer from "../hooks/useServer"

const RenderDatas = ({ route, datas, onNavigate }) => {
    const [page, setPage] = useState(1)
    const server = useServer()
    const datasPerPage = 20

    useEffect(() => {
        setPage(1)
    }, [datas])

    const startIndex = (page - 1) * datasPerPage
    const endIndex = startIndex + datasPerPage
    const currentItems = useMemo(() => datas.slice(startIndex, endIndex), [datas, page])
    const totalPages = Math.ceil(datas.length / datasPerPage)

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.button} onPress={() => onNavigate(item)}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: server.getPath(item.type ?? route, item.name).image }}
                    style={styles.imageButton}
                />
            </View>
            <Text style={styles.buttonText}>
                {item.name
                    .replace(/\([^)]*\)/g, '')
                    .replace(/[_-]/g, ' ')
                    .split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')
                }
            </Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={currentItems}
                keyExtractor={item => `${item.type ?? route}-${item.id}`}
                contentContainerStyle={{ gap: 10, paddingVertical: 10 }}
                renderItem={renderItem}
            />
            {totalPages > 1 && (
                <View style={styles.alterContainer}>
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(num => (
                        <TouchableOpacity 
                            style={[styles.alter, page == num && styles.alterActive]} 
                            key={num} 
                            onPress={() => setPage(num)}
                        >
                            <Text style={page == num ? styles.alterTextActive : styles.alterText}>
                                {num}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    )
}
// Componente que gera uma lista e quando necessário também a divide em abas

const styles = StyleSheet.create({
    listContainer: {
        flex: 1
    },
    button: {
        backgroundColor: '#FFFBEB',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        gap: 20,
        shadowColor: '#1A1A1A',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderLeftWidth: 5,
        backgroundColor: '#e9e3cbff'
    },
    imageContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        width: 60,
        height: 60
    },
    imageButton: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1A1A1A',
        flex: 1
    },
    alterContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 10
    },
    alter: {
        width: 35,
        height: 35,
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    alterActive: {
        backgroundColor: '#4AA5F0', 
        borderWidth: 1,
        borderColor: '#1A1A1A',
        shadowColor: '#4AA5F0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    alterText: {
        color: '#1A1A1A',
        fontWeight: '500'
    },
    alterTextActive: {
        color: '#FFFBEB',
        fontWeight: 'bold'
    }
})

export default RenderDatas
