import { Text, View, TextInput, Pressable, StyleSheet } from "react-native"

const Search = () => {
    return (
        <View style={styles.container}>
            <TextInput />
            <Pressable>
                <Text>Texto</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: '#1976D2',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20, // para simular espaço do status bar
    }
})

export default Search
