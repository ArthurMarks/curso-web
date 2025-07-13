import { useEffect, useMemo, useState } from "react"
import { View, Text, Pressable, TextInput, StyleSheet } from "react-native"
import { evaluate } from "mathjs"
import { setItem } from "../storage/storage"

const Calculator = ({ navigation }) => {
    // Declaração de variáveis
    const [calc, setCalc] = useState('0')
    const [error, setError] = useState('')

    const valuesList = {
        numbers: '0123456789'.split(''),
        operators: '+-*/'.split(''),
        // dels: ['Backspace', 'Delete'],
        // equals: ['=', 'Enter'],
        // float: [','],
        // percent: ['%']
    }

    // Efeito executado sempre que calc altera (se 'error' estiver em um estado diferente de '')
    useEffect(() => setError(''), [calc])

    // Funções utilitárias
    const findLastOperatorIndex = (calc) => calc.split('').findLastIndex(value => valuesList.operators.includes(value))

    const findLastOperation = (calc) => {
        const lastOperatorIndex = findLastOperatorIndex(calc)
        return calc.slice(lastOperatorIndex == -1 ? 0 : lastOperatorIndex + 1, calc.length)
    }

    const includesOperator = (calc) => valuesList.operators.some(operator => calc.includes(operator))

    const endsWithOperator = () => valuesList.operators.includes(lastValue)
    const endsWithNumber = () => valuesList.numbers.includes(lastValue)

    // Variáveis que necessitam de alteração constante
    // useMemo: Hook que calcula e memoriza um valor, e só o recalcula quando as dependências mudam (evita reprocessamentos desnecessários)
    const lastValue = useMemo(() => calc.at(-1), [calc])

    const visual = useMemo(() => {
        return calc.replace(/\*/g, '×').replace(/\//g, '÷').replace(/\./g, ',')
    }, [calc])

    const preview = useMemo(() => {
        const hasAtLeastTwoOperators = calc.split('').filter(value => valuesList.operators.includes(value)).length >= 2

        if (!hasAtLeastTwoOperators || !endsWithOperator()) return

        try {
            const prevResult = evaluate(calc.slice(0, -1))
            return Number.isFinite(prevResult) && String(prevResult)
        } catch {
            return
        }
    }, [calc])

    // Funções de lógica da calculadora
    const removeAll = () => {
        setCalc('0')
    }

    const removeEntry = () => {
        if (calc == '0') {
            return // Nada ocorre se não houver valores
        } else if (!includesOperator(calc)) { // !isNaN(Number(calc))
            removeAll() // Remove tudo se não houver operações
        } else if (endsWithOperator()) {
            removeSingle() // Se o último dígito for operador, remove somente ele
        } else {
            const lastOperatorIndex = findLastOperatorIndex(calc) // Encontra o índice do último operador informado
            setCalc(calc.slice(0, lastOperatorIndex + 1)) // Remove todos os números até o último operador informado
        }
    }

    const removeSingle = () => {
        if (calc.length > 1) {
            setCalc(calc.slice(0, -1))
        } else if (calc != '0') {
            // Evita re-renderizações desnecessárias (trocar '0' por '0')
            removeAll()
        }
    }

    const insertNumber = (number) => {
        const allZero = number == '0' && calc == '0'
        const hasInvalidPosition = lastValue == '0' && valuesList.operators.includes(calc.at(-2))

        if (allZero || hasInvalidPosition) return

        setCalc(calc == '0' ? number : calc + number)
    }

    const insertOperator = (operator) => {
        if (endsWithNumber()) {
            setCalc(calc + operator)
        } else if (lastValue != operator) {
            // Evita re-renderizações desnecessárias (trocar '+' por '+', por exemplo) e substitui ponto ou sinal por sinal
            setCalc(calc.slice(0, -1) + operator)
        }
    }

    const insertFloat = () => {
        const lastOperation = findLastOperation(calc)

        if (endsWithNumber() && !lastOperation.includes('.')) {
            setCalc(calc + '.')
        }
    }

    /* const insertPercent = () => {
        const lastOperation = findLastOperation(calc)

        if (endsWithNumber()) {
            const result = String(Number(lastOperation) / 100)
            setCalc(calc.slice(0, findLastOperatorIndex(calc) + 1) + result)
        }
    } // Opção de percentual */

    const calculateValue = async () => {
        if (endsWithNumber() && includesOperator(calc)) {
            const result = evaluate(calc)

            if (!Number.isFinite(result)) {
                setError('Operação inválida')
                return
            }

            const sucess = await setItem(visual, result)

            sucess && setCalc(String(result))
        } else if (!error) {
            setError('Operação inválida!')
        }
    }

    /* const inputValidation = (e) => {
        const k = e.key

        if (valuesList.numbers.includes(k)) {
            // Caso for um número
            insertNumber(k)
        } else if (valuesList.operators.includes(k)) {
            // Caso for um operador
            insertOperator(k)
        } else if (valuesList.dels.includes(k)) {
            // Caso for tecla de exclusão
            removeSingle()
        } else if (valuesList.equals.includes(k)) {
            // Caso for tecla de igual
            calculateValue()
        } else if (valuesList.float.includes(k)) {
            // Caso for tecla de ponto flutuante
            insertFloat()
        }// else if (valuesList.percent.includes(k)) {
            // Caso for tecla de porcentagem
            //insertPercent()
        //}
    } // Opção de escrever no input (ativar com onKeyPress) */

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <TextInput
                    value={visual}
                    // onKeyPress={inputValidation}
                    multiline
                    editable={false}
                    style={styles.input}
                />
                <View style={styles.output}>
                    <Text style={[styles.outputBoxes, styles.error]}>{error}</Text>
                    <Text style={[styles.outputBoxes, styles.parcial]}>{preview}</Text>
                </View>
            </View>

            <View style={styles.operation}>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => navigation.navigate('History')} style={[styles.button, styles.button3]}>
                        <Text style={[styles.text, styles.text1]}>H</Text>
                    </Pressable>
                    <Pressable onPress={removeEntry} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text1]}>CE</Text>
                    </Pressable>
                    <Pressable onPress={removeAll} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text1]}>C</Text>
                    </Pressable>
                    <Pressable onPress={removeSingle} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text1]}>⌫</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => insertNumber('7')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>7</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('8')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>8</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('9')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>9</Text>
                    </Pressable>
                    <Pressable onPress={() => insertOperator('+')} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text2]}>+</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => insertNumber('4')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>4</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('5')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>5</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('6')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>6</Text>
                    </Pressable>
                    <Pressable onPress={() => insertOperator('-')} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text2]}>-</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => insertNumber('1')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>1</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('2')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>2</Text>
                    </Pressable>
                    <Pressable onPress={() => insertNumber('3')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>3</Text>
                    </Pressable>
                    <Pressable onPress={() => insertOperator('*')} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text2]}>×</Text>
                    </Pressable>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable onPress={() => insertNumber('0')} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>0</Text>
                    </Pressable>
                    <Pressable onPress={insertFloat} style={[styles.button, styles.button2]}>
                        <Text style={[styles.text, styles.text3]}>,</Text>
                    </Pressable>
                    <Pressable onPress={calculateValue} style={[styles.button, styles.button3]}>
                        <Text style={[styles.text, styles.text3]}>=</Text>
                    </Pressable>
                    <Pressable onPress={() => insertOperator('/')} style={[styles.button, styles.button1]}>
                        <Text style={[styles.text, styles.text2]}>÷</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        height: '100vh',
        backgroundColor: '#202020',
        padding: '5%'
    },
    result: {
        display: 'flex',
        height: '25%'
    },
    input: {
        height: '70%',
        color: '#fff',
        textAlign: 'right',
        outlineColor: '#fff',
        fontSize: '1.5em'
    },
    output: {
        display: 'flex',
        flexDirection: 'row',
        height: '30%',
        justifyContent: 'space-between'
    },
    outputBoxes: {
        flex: 1
    },
    error: {
        fontSize: '1em',
        color: '#fff',
    },
    parcial: {
        fontSize: '1.3em',
        color: '#daa520',
        textAlign: 'right'
    },
    operation: {
        display: 'flex',
        height: '75%',
        gap: 3
    },
    buttonContainer: {
        display: 'flex',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 3
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        outlineColor: '#fff',
        borderRadius: 5
    },
    button1: {
        backgroundColor: '#323232',
    },
    button2: {
        backgroundColor: '#3b3b3b',
    },
    button3: {
        backgroundColor: '#76b9ed'
    },
    text: {
        textAlign: 'center',
        color: '#fff'
    },
    text1: {
        fontSize: '1em'
    },
    text2: {
        fontSize: '1.7em'
    },
    text3: {
        fontSize: '1.3em'
    }
})

export default Calculator
