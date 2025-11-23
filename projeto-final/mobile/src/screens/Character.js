import axios from "axios"
import { View, Text, TouchableOpacity, Image } from "react-native"
import useServer from "../hooks/useServer"
import useStyle from "../hooks/useStyle"

import { useEffect, useState } from "react"

const Character = ({ route, navigation }) => {
    const server = useServer()
    const styles = useStyle()
    const [text, setText] = useState('')

    const character = route.params
    const skills = character.skills
    const path = server.getPath('character', character.name)

    useEffect(() => {
        const handleText = async () => {
            const response = await axios.get(path.text)
            setText(response.data)
        }

        handleText()
    }, [character])

    const arrayTexts = text.split('\\').map(text => text.trim())

    return (
        <>
            <View style={styles.image.container}>
                <Image
                    source={{ uri: path.image }}
                    style={styles.image.self}
                />
            </View>
            <View style={styles.text.container}>
                {arrayTexts.map((text, index) => (
                    <Text key={index} style={styles.text.self}>{text}</Text>
                ))}
            </View>
            {skills.length > 0 && (
                <View style={styles.about.container}>
                    <Text style={styles.about.title}>Habilidade{skills.length > 1 ? 's' : ''} do personagem</Text>
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
// Tela que mostra detalhes sobre um personagem selecionado pelo usuário

export default Character
