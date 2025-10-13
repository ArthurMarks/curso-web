import { View, Text, Image, StyleSheet } from "react-native"
import { useState, useEffect } from "react"
import useServer from "../../hooks/useServer"

const Character = ({ route }) => {
    const data = route.params
    const server = useServer()
    const path = server.getImagePath('character', data.name)
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        Image.getSize(path, (width, height) => {
            const ratio = 300 / width
            setDimensions({ width: 300, height: height * ratio })
        }, (err) => console.log(err))
    }, [path])

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 500)
        return () => clearTimeout(timer)
    }, [])


    return (
        <>
            {loading && <Text>Carregando conteúdo...</Text>}
            <View style={loading ? styles.hidden : styles.ok}>
                <Text>{data.name}</Text>
                <Text>Teste criado em {new Date(data.date_creation).toLocaleDateString()}</Text>
                <Text>Habilidades:</Text>
                <Text>Caminho da imagem: {path}</Text>
                
                <Image
                    source={{ uri: path }}
                    style={{ width: dimensions.width, height: dimensions.height, resizeMode: 'contain', backgroundColor: '#eee' }}
                />
            </View>
        </>
    )
}
/** Sub aba de exemplo */
/** Para editar o estilo do invólucro (<View> principal), vá para InnerWrapper.js */

const styles = StyleSheet.create({
    overlay: {
        width: '100%',
        height: '100%'
    },
    ok: {
        display: 'flex'
    },
    hidden: {
        display: 'none'
    }
})

export default Character
