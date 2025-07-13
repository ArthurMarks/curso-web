import AsyncStorage from "@react-native-async-storage/async-storage"

// Adiciona valores ao armazenamento
const setItem = async (calc, result) => {
    try {
        const data = {
            info: `${calc}=${String(result).replace(/\./g, ',')}`.replace(/([÷×\-\+=])/g, ' $1 '),
            localDateInfo: new Date().toLocaleString()
        }
        const key = `history-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`

        await AsyncStorage.setItem(key, JSON.stringify(data))
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

// Captura todos os itens do armazenamento
const getAllItens = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        const results = await AsyncStorage.multiGet(keys)

        return results.map(([key, value]) => ({ key: key, value: JSON.parse(value)}))
    } catch (error) {
        console.error(error)
        return []
    }
}

// Remove um item específico do armazenamento
const removeItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

// Remove todos os itens do armazenamento
const removeAllItens = async () => {
    try {
        await AsyncStorage.clear()
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

export { setItem, getAllItens, removeItem, removeAllItens }
