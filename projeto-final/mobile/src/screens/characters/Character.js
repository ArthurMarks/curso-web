import { View, Text, Image, StyleSheet } from "react-native"
import useServer from "../../hooks/useServer"

const Character = ({ route }) => {
    const server = useServer()

    const character = route.params
    const skills = character.skills

    const path = server.getPath('character', character.name)

    return (
        <>
            <Text>{character.name}</Text>
            <Text>Teste criado em {new Date(character.date_creation).toLocaleDateString()}</Text>
            
            

            <Image
                source={{ uri: path.image }}
                style={{ width: 300, height: 200, resizeMode: 'contain' }}
            />
        </>
    )
}
/** Sub aba de exemplo */
/** Para editar o estilo do invólucro (<View> principal), vá para InnerWrapper.js */

export default Character
