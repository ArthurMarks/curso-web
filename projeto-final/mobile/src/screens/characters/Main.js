import { View, Text, Pressable, FlatList } from "react-native"
import personagens from "../../data"

const Main = ({ navigation }) => {
    return (
        <>
            <Text style={{ marginTop: 20 }}>Personagens</Text>
            <FlatList 
                data={personagens}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('details', { data: item })}>
                        <Text>{item.nome}</Text>
                    </Pressable>
                )}
            />
        </>
    )
}
/** Aba principal de exemplo */
/** Para editar o estilo do invólucro (<View> principal), vá para Wrapper.js */

export default Main
