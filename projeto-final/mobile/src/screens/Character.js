import axios from "axios"
import { View, Text, Image, StyleSheet } from "react-native"
import useServer from "../hooks/useServer"
import { useEffect, useState } from "react"

const Character = ({ route }) => {
    const server = useServer()
    const [text, setText] = useState('')

    const character = route.params
    const skills = character.skills
    const path = server.getPath('character', character.name)

    useEffect(() => {
        const getText = async () => {
            const response = await axios.get(path.text)
            
            setText(response.data)
        }

        getText()
    }, [])

    return (
        <>
            <Image
                source={{ uri: path.image }}
                style={{ width: 300, height: 200, resizeMode: 'contain' }}
            />
            <Text>{text}</Text>
        </>
    )
}
/** Sub aba de exemplo */
/** Para editar o estilo do invólucro (<View> principal), vá para InnerWrapper.js */

export default Character
