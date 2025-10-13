import { ScrollView, FlatList, Pressable, Text } from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import useServer from "../hooks/useServer"

const Wrapper = ({ children, screen }) => {
    const navigation = useNavigation()
    const [datas, setDatas] = useState([])
    const server = useServer()

    const fetchData = async () => {
        const data = await server.getAllData(screen)
        setDatas(data)
    }

    useEffect(() => {
        fetchData()
    }, [screen, server])

    return (
        <ScrollView style={{
            // Aplique aqui os estilos
        }}>
            {children}
            <FlatList
                data={datas}
                keyExtractor={item => item.id}
                scrollEnabled={false}
                renderItem={({ item }) => {
                    const data = server.getByDataId(screen, item.id)
                    console.log(data)

                    return (
                        <Pressable onPress={() => navigation.navigate('details', data)}>
                            <Text>{item.name}</Text>
                        </Pressable>
                    )
                }}
            />
        </ScrollView>
    )
}
/** Componente para aplicar estilos padrão para as abas principais (personagens, vilas, clãs e habilidades) */

export default Wrapper
