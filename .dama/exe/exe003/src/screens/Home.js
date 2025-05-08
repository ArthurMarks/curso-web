import { View, Text, Pressable } from "react-native-web"

const Home = (props) => {
    const navigation = props.navigation

    return (
        <View>
            <Text>Calculadora</Text>
            <Pressable onPress={() => navigation.navigate('Calculadora 1')}>
                <Text>VERSÃO 1</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Calculadora 2')}>
                <Text>VERSÃO 2</Text>
            </Pressable>
        </View>
    )
}

export default Home
