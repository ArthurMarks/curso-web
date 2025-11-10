import axios from "axios"
import { View, Text, Image } from "react-native"
import useServer from "../hooks/useServer"
import useStyle from "../hooks/useStyle"
import { useEffect, useState } from "react"

const Character = ({ route }) => {
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
    }, [])

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
        </>
    )
}

export default Character
