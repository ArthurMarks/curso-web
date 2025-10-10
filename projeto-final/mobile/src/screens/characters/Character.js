import { View, Text } from "react-native"

const Character = ({ route }) => {
    const { data } = route.params

    return (
        <>
            <Text>{data.nome}</Text>
            <Text>{data.idade} anos</Text>
            <Text>{data.habilidade}</Text>

            <Text style={{fontSize: 200}}>Lorem ipsum dolor sit amet</Text>
        </>
    )
}
/** Sub aba de exemplo */
/** Para editar o estilo do invólucro (<View> principal), vá para InnerWrapper.js */

export default Character
