import { FlatList, Text } from 'react-native'

const RevelarUsuarios = () => {
    const usuarios = [
        { name: 'Lucas', age: 16 },
        { name: 'Beatriz', age: 18 },
        { name: 'Mariana', age: 15 },
        { name: 'Felipe', age: 19 },
        { name: 'Ana', age: 20 },
        { name: 'Ricardo', age: 17 },
        { name: 'Gabriela', age: 14 },
        { name: 'João', age: 16 },
        { name: 'Sofia', age: 18 },
        { name: 'Carlos', age: 21 }
    ]

    return (
        <FlatList
            data={usuarios}
            renderItem={usuario => <Text>{usuario.item.name} - {usuario.item.age}</Text>}
        />
    )
}

export default RevelarUsuarios
