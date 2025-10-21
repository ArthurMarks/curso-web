import { useState, useMemo } from "react"
import { View, FlatList, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import useServer from "../hooks/useServer"

const RenderDatas = ({ route, datas, onNavigate }) => {
    const [page, setPage] = useState(1)
    const server = useServer()
    const datasPerPage = 10

    const startIndex = (page - 1) * datasPerPage
    const endIndex = startIndex + datasPerPage
    const currentItems = useMemo(() => datas.slice(startIndex, endIndex), [datas, page])

    const totalPages = Math.ceil(datas.length / datasPerPage)

    return (
        <View>
            <FlatList
                data={currentItems}
                keyExtractor={item => `${item.type ?? route}-${item.id}`}
                scrollEnabled={false}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.button} onPress={() => onNavigate(item)}>
                        <Image 
                            source={{ uri: server.getPath(item.type ?? route, item.name).image }}
                            style={styles.imageButton}
                        />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <View style={styles.alterContainer}>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(num => (
                    <TouchableOpacity style={[styles.alter, page == num && styles.alterActive]} key={num} onPress={() => setPage(num)}>
                        <Text>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    imageButton: {
        width: 100,
        height: 100
    },
    alterContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20
    },
    alter: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center'
    },
    alterActive: {
        backgroundColor: '#A6886D'
    }
})

export default RenderDatas
