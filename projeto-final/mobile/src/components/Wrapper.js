import { ScrollView, FlatList, Pressable, Text } from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import useServer from "../hooks/useServer"

const Wrapper = ({ children, screen }) => {
    const navigation = useNavigation()
    const [datas, setDatas] = useState([])
    const server = useServer()

    const fetchData = async () => {
        try {
            const data = await server.getAllData(screen)
            setDatas(data || [])
        } catch (error) {
            console.log(`Erro ao buscar os dados: ${error}`)
        }
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
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigation.navigate('details', { data: item })}>
                        <Text>{item.name}</Text>
                    </Pressable>
                )}
            />
        </ScrollView>
    )
}
/** Componente para aplicar estilos padrão para as abas principais (personagens, vilas, clãs e habilidades) */

export default Wrapper
