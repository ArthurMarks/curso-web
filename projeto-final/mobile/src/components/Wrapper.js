import { ScrollView, FlatList, Pressable, Text } from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import useServer from "../hooks/useServer"
import RenderDatas from "./RenderDatas"

const Wrapper = ({ children, screen }) => {
    const navigation = useNavigation()
    const [datas, setDatas] = useState([])
    const server = useServer()

    const fetchData = async () => {
        const results = await server.getAllData(screen)
        setDatas(results)
    }

    useEffect(() => {
        fetchData()
    }, [screen])

    return (
        <ScrollView style={{
            // Aplique aqui os estilos
        }}>
            {children}
            <RenderDatas
                route={screen}
                datas={datas}
                onNavigate={item => navigation.navigate('details', item)}
            />
        </ScrollView>
    )
}
/** Componente para aplicar estilos padrão para as abas principais (personagens, vilas, clãs e habilidades) */

export default Wrapper
