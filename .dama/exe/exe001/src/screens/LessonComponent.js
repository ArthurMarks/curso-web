import { View, StyleSheet, Text } from "react-native";

const LessonComponent = () => {
    const nome = 'Arthur'
    
    return (  
        <View>
            <Text style={styles.textStyle1}>Iniciando os estudos em React Native!</Text>
            <Text style={styles.textStyle2}>O meu nome é {nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle1: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
})

export default LessonComponent
