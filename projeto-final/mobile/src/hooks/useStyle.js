import { StyleSheet } from "react-native"

// Função que define estilos genéricos para as abas específicas
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

    const about = StyleSheet.create({
        container: {
            borderTopWidth: 1,
            marginTop: 20,
            paddingTop: 20,
            gap: 20
        },
        title: {
            fontSize: 20
        },
        itemContainer: {
            gap: 10
        },
        item: {
            fontSize: 15,
            color: '#4AA5F0'
        }
    })

    return { image, text, about }
}

export default useStyle
