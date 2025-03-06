import { FlatList, Button } from 'react-native'

const NumerosClicaveis = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1)

    const doubleNumber = (number) => {
        alert(number * 2)
    }

    return (
        <FlatList
            data={numbers}
            renderItem={({ item }) => {
                return (
                    <Button
                        onPress={() => doubleNumber(item)}
                        title={item.toString()}
                    />
                )
            }}
        />
    )
}

export default NumerosClicaveis
