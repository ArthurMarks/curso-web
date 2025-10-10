import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const InnerWrapper = ({ children, back }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(back, { screen: 'tab' })} style={styles.back}>
                <Image 
                    source={require('../../assets/arrow.png')}
                    style={styles.backIcon}
                />
                <Text>Voltar</Text>
            </TouchableOpacity>
            {children}
        </View>
    )
}
/** Componente para aplicar estilos padrão para abas específicas (renderização dependendo do conteúdo) */

const styles = StyleSheet.create({
    container: {

    },
    back: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#f5ebe2ff'
    },
    backIcon: {
        width: 20,
        height: 20
    },
})

export default InnerWrapper
