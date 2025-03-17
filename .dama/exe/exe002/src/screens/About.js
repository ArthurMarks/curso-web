import { View, Text, StyleSheet } from "react-native"

const About = (props) => {
    const { name } = props.route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>Developed by {name}</Text>

            <Text style={styles.title}>Version</Text>
            <Text  style={styles.text}>FirstApp version 1.0</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        margin: '3px',
        fontSize: '1.5em',
        color: '#f00'
    },
    text: {
        fontSize: '1.1em',
        margin: '20px',
    }
})

export default About
