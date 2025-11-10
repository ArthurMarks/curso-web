import { StyleSheet } from "react-native"

const useStyle = () => {
    const image = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 30
        },
        self: {
            width: '100%',
            height: 300,
            borderRadius: 5
        }
    })

    const text = StyleSheet.create({
        container: {
            gap: 30
        },
        self: {
            fontSize: 15,
            textAlign: 'justify'
        }
    })

    return { image, text }
}

export default useStyle
