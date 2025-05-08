import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native-web"

const Calc1 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [result, setResult] = useState(0)

    const somar = () => setResult(a + b)
    const subtrair = () => setResult(a - b)
    const multiplicar = () => setResult(a * b)
    const dividir = () => setResult(b == 0 ? 'Operação inválida' : a / b)

    return (
        <View>
            <Text>Valor A:</Text>
            <TextInput
                value={a}
                onChangeText={newValue => setA(Number(newValue))}
            />

            <Text>Valor B:</Text>
            <TextInput 
                value={b}
                onChangeText={newValue => setB(Number(newValue))}
            />

            <Pressable onPress={somar}>
                <Text>Somar (a+b)</Text>
            </Pressable>
            <Pressable onPress={subtrair}>
                <Text>Subtrair (a-b)</Text>
            </Pressable>
            <Pressable onPress={multiplicar}>
                <Text>Multiplicação (a*b)</Text>
            </Pressable>
            <Pressable onPress={dividir}>
                <Text>Divisão (a/b)</Text>
            </Pressable>

            <Text>Resultado: {result}</Text>
        </View>
    )
}

export default Calc1