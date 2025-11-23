import { ScrollView, Text, StyleSheet, View } from "react-native"
import { useState, useEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import useServer from "../hooks/useServer"
import RenderDatas from "./RenderDatas"

const Wrapper = ({ screen }) => {
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

    const formatScreenName = (name) => {
        if (!name) return 'Informações'
        const map = {
            character: 'Personagens',
            clan: 'Clãs',
            village: 'Vilas',
            skill: 'Habilidades',
        }
        const capitalized = name.charAt(0).toUpperCase() + name.slice(1)
        return map[name] || capitalized
    }

    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.headerTextContainer}>
                <Text style={styles.titleText}>
                    {formatScreenName(screen)}
                </Text>
                <Text style={styles.subtitleText}>
                    Aqui estão presentes as principais informações sobre {formatScreenName(screen).toLowerCase()}.
                </Text>
            </View>
            
            <RenderDatas
                route={screen}
                datas={datas}
                onNavigate={item => navigation.navigate('details', item)}
            />
        </ScrollView>
    )
}
// Componente para aplicar estilos padrão para as abas principais (personagens, vilas, clãs e habilidades) 

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#FFFBEB'
    },
    headerTextContainer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#1A1A1A' + '10',
        marginBottom: 10
    },
    titleText: {
        fontSize: 24,
        fontWeight: '900',
        color: '#1A1A1A'
    },
    subtitleText: {
        fontSize: 16,
        color: '#1A1A1A',
        marginTop: 5
    }
})

export default Wrapper