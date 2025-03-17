import { View, Text, StyleSheet } from "react-native"

const UserDetails = (props) => {
    const { email, name, age } = props.route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.text}>{name}</Text>

            <Text style={styles.title}>Age</Text>
            <Text style={styles.text}>{age}</Text>

            <Text style={styles.title}>Email</Text>
            <Text style={styles.text}>{email}</Text>
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

export default UserDetails
