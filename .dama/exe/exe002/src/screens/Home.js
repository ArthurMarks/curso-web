import { View, Text, Pressable, StyleSheet } from "react-native"

const Home = (props) => {
    const navigation = props.navigation

    const { email, name, age } = props.route.params
    const firstName = name.split(' ')[0]

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {firstName} to our first project.</Text>
            <Text style={styles.text}>Now we can navigate between screens!</Text>
            <Text style={styles.text}>How are you feeling?</Text>

            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('User Details', { email, name, age })}
            >
                <Text style={styles.textButton}>USER DETAILS</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate('About', { name })}
            >
                <Text style={styles.textButton}>ABOUT</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    text: {
        fontSize: '1.1em',
        margin: '20px',
        width: '70%'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '50px',
        margin: '10px',
        backgroundColor: '#f00',
        borderRadius: '10px'
    },
    textButton: {
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default Home
