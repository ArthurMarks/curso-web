import { Text, View, TextInput, Image, Pressable, StyleSheet } from "react-native"

const Search = () => {
    return (
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
                    placeholder='Personagens, habilidades...'
                    style={styles.input}
                />
                <Pressable style={styles.filter}>
                    <Image
                        source={require('../../assets/filter.png')}
                        style={styles.imageFilter}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '150',
        backgroundColor: '#A6886D',
        paddingHorizontal: 10,
        paddingTop: 30,
        boxShadow: '0 15px 10px #ddd',
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
    },
    input: {    
        backgroundColor: '#D9B79A',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 15,
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
})

export default Search
