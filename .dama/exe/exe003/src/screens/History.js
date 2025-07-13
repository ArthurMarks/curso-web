import { useEffect, useState } from "react"
import { View, Text, Pressable, FlatList, StyleSheet, Image } from "react-native"
import { getAllItens, removeItem, removeAllItens } from "../storage/storage"

const History = () => {
    // Declaração de variáveis
    const [datas, setDatas] = useState([])

    // Efeito executado quando o componente é carregado (adiciona os dados à lista de registros)
    useEffect(() => {
        const loadDatas = async () => {
            const registers = await getAllItens()
            registers.length && setDatas(registers)
        }

        loadDatas()
    }, [])

    // Funções que lidam com exclusão dos registros (interna e externamente)
    const handleRemoveAll = async () => {
        const sucess = await removeAllItens()
        sucess && setDatas([])
    }

    const handleRemoveItem = async (key) => {
        const sucess = await removeItem(key)
        sucess && setDatas(datas.filter(data => data.key != key))
    }

    return (
        <View style={styles.container}>
            {datas.length ? (
                <>
                    <Pressable style={styles.clear} onPress={handleRemoveAll}>
                        <Text style={styles.text}>Clear History</Text>
                    </Pressable>
                    <FlatList
                        data={datas}
                        keyExtractor={data => data.key}
                        contentContainerStyle={{ gap: 10 }}
                        renderItem={({ item, index }) => (
                            <View style={[styles.register, index % 2 == 0 ? styles.bg1 : styles.bg2]}>
                                <View style={styles.info}>
                                    <Text style={styles.text}>{item.value.info}</Text>
                                    <Text style={styles.text}>{item.value.localDateInfo}</Text>
                                </View>
                                <View style={styles.iconsContainer}>
                                    <Pressable onPress={() => handleRemoveItem(item.key)} style={styles.trash}>
                                        <Image style={styles.image} source={require('../../assets/trash.png')} />
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    />
                </>
            ) : (
                <Text style={[styles.text, styles.clean]}>Clean History</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#202020',
        padding: '5%',
        gap: 10
    },
    clear: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#76b9ed',
        borderRadius: 10
    },
    clean: {
        textAlign: 'center'
    },
    register: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
    },
    info: {
        display: 'flex',
        flex: 3,
        justifyContent: 'space-between',
        gap: 10,
        padding: 10
    },
    iconsContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: '1em',
        color: '#fff'
    },
    bg1: {
        backgroundColor: '#323232'
    },
    bg2: {
        backgroundColor: '#3b3b3b'
    },
    image: {
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    trash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ed7676',
        borderTopEndRadius: 10
    }
})

export default History
