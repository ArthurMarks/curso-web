import axios from "axios"
import { View, Text, Image } from "react-native"
import useServer from "../hooks/useServer"
import useStyle from "../hooks/useStyle"
import { useEffect, useState } from "react"

const Clan = ({ route }) => {
    const server = useServer()
    const styles = useStyle()
    const [text, setText] = useState('')

    const clan = route.params
    const path = server.getPath('clan', clan.name)

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
                    style={{ width: 300, height: 300 }}
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

export default Clan
