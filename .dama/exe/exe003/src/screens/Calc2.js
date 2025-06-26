import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native-web"
import { evaluate } from "mathjs"

const Calc2 = () => {
    const [calc, setCalc] = useState('0')
    const numbersList = '0123456789'.split('')
    const operatorsList = '+-*/'.split('')
    const delsList = ['Backspace', 'Delete']

    const removeAll = () => {
        setCalc('0')
    }

    const insertNumber = (number) => {
        setCalc((prevCalc) => {
            if (prevCalc == '0') {
                return number
            }
    
            const lastChar = prevCalc[prevCalc.length - 1]
            const secondLastChar = prevCalc[prevCalc.length - 2]
    
            // Se o último caractere for '0', o penúltimo for um operador e o novo número for '0', não faz nada
            if (lastChar == '0' && operatorsList.includes(secondLastChar) && number == '0') {
                return prevCalc
            }
    
            return prevCalc + number
        })
    }

    const inputValidation = (e) => {
        const k = e.key

        if (numbersList.includes(k)) {
            // Caso for um número
            insertNumber(k)
            // Caso o valor for somente 0, substitui 0 pelo número digitado, caso contrário, concatena com os valores já informados
        } else if (operatorsList.includes(k)) {
            // Caso for um operador
            if (!operatorsList.includes(calc[calc.length - 1])) setCalc(calc + k)
            // Caso a última posição informada não for um operador, adiciona um operador, caso contrário, não faz nada
        } else if (delsList.includes(k)) {
            // Caso for tecla de exclusão
            setCalc(calc.length > 1 ? calc.slice(0, -1) : '0')
            // Caso a lista for maior que 1, faz um recorte excluindo somente o último valor da lista, caso contrário, 0 será adicionado
        }
    }

    return (
        <View>
            <TextInput
                value={calc}
                onKeyPress={inputValidation}
            />

            <View>
                <Pressable>
                    <Text>CE</Text>
                </Pressable>
                <Pressable onPress={removeAll}>
                    <Text>C</Text>
                </Pressable>
                <Pressable>
                    <Text>⌫</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => insertNumber('7')}>
                    <Text>7</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('8')}>
                    <Text>8</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('9')}>
                    <Text>9</Text>
                </Pressable>
                <Pressable onPress={''}>
                    <Text>+</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => insertNumber('4')}>
                    <Text>4</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('5')}>
                    <Text>5</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('6')}>
                    <Text>6</Text>
                </Pressable>
                <Pressable onPress={''}>
                    <Text>-</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => insertNumber('1')}>
                    <Text>1</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('2')}>
                    <Text>2</Text>
                </Pressable>
                <Pressable onPress={() => insertNumber('3')}>
                    <Text>3</Text>
                </Pressable>
                <Pressable onPress={''}>
                    <Text>×</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => insertNumber('0')}>
                    <Text>0</Text>
                </Pressable>
                <Pressable>
                    <Text>.</Text>
                </Pressable>
                <Pressable>
                    <Text>=</Text>
                </Pressable>
                <Pressable>
                    <Text>÷</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Calc2