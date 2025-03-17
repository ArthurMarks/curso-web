import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import { useState } from 'react'
import users from './users'

const Login = (props) => {
    const navigation = props.navigation

    const [email, setEmail] = useState('teste@example.com')
    const [pass, setPass] = useState('teste123')
    const [invalid, setInvalid] = useState(false)

    const verifyData = () => {
        const found = users.find(user => user.email == email && user.password == pass)
        
        if (found) {
            setInvalid(false)
            navigation.navigate('Home', { email: found.email, name: found.name, age: found.age }) 
        } else {
            setInvalid(true)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Digite seu email"
            />

            <Text style={styles.title}>Password</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPass}
                value={pass}
                placeholder="Digite sua senha"
                secureTextEntry
            />

            {invalid && <Text style={styles.subtitle}>Usuário ou senha inválidos!</Text>}

            <Pressable style={styles.button} onPress={verifyData}>
                <Text style={styles.textButton}>LOGIN</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    title: {
        margin: '10px',
        fontSize: '1.5em',
        color: '#f00'
    },
    subtitle: {
        margin: '5px',
        color: '#f00'
    },
    input: {
        width: '70%',
        height: '50px',
        padding: '20px',
        backgroundColor: '#ddd',
        borderRadius: '10px'
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

export default Login
