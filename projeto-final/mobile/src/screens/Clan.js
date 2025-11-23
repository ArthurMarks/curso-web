import axios from "axios"
import { View, Text, TouchableOpacity, Image } from "react-native"
import useServer from "../hooks/useServer"
import useStyle from "../hooks/useStyle"
import { useEffect, useState } from "react"

const Clan = ({ route, navigation }) => {
    const server = useServer()
    const styles = useStyle()
    const [text, setText] = useState('')

    const clan = route.params
    const characters = clan.characters
    const skills = clan.skills
    const path = server.getPath('clan', clan.name)

    useEffect(() => {
        const handleText = async () => {
            const response = await axios.get(path.text)
            setText(response.data)
        }

        handleText()
    }, [clan])

    useEffect(() => {
        
    })

    const arrayTexts = text.split('\\').map(text => text.trim())

    return (
        <>
            <View style={styles.image.container}>
                <Image
                    source={{ uri: path.image }}
                    style={{ width: 300, height: 300 }}
                />
            </View>
            <View style={styles.text.container}>
                {arrayTexts.map((text, index) => (
                    <Text key={index} style={styles.text.self}>{text}</Text>
                ))}
            </View>
            {skills.length > 0 && (
                <View style={styles.about.container}>
                    <Text style={styles.about.title}>Habilidade{skills.length > 1 ? 's' : ''} do clã</Text>
                    <View style={styles.about.itemContainer}>
                        {skills.map((skill, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigation.navigate('skill', { screen: 'details', params: skill })}
                            >
                                <Text style={styles.about.item}>•  {skill.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            )}
        </>
    )
}
// Tela que mostra detalhes sobre um clã selecionado pelo usuário

export default Clan
