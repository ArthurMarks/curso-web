import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native-web"

const Calc2 = () => {
    const [calc, setCalc] = useState('0')

    const remove = () => {
        setCalc('0')
    }

    const inputValidation = (e) => {
        const numbers = '0123456789'.split('')
        const operators = '+-*/'.split('')
        const dels = ['Backspace', 'Delete']
        const key = e.key

        if (numbers.includes(key)) {
            setCalc((prevCalc) => prevCalc == '0' ? key : calc + key)
        } else if (operators.includes(key)) {
            if (operators.includes(calc[calc.length - 1])) return
            setCalc(calc + key)
        } else if (dels.includes(key)) {
            setCalc((prevCalc) => prevCalc.length > 1 ? prevCalc.slice(0, -1) : '0')
        }
    }

    return (
        <View>
            <Pressable onPress={remove}>
                <Text>C</Text>
            </Pressable>

            <TextInput
                value={calc}
                onKeyPress={inputValidation}
            />

            
        </View>
    )
}

export default Calc2