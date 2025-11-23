import { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const InnerWrapper = ({ children, back }) => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 300) 
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <ScrollView style={[loading ? styles.hidden : styles.show, { flex: 1, backgroundColor: '#FFFBEB' }]}> 
                <TouchableOpacity 
                    onPress={() => navigation.navigate(back, { screen: 'tab' })} 
                    style={styles.back}
                >
                    <Image
                        source={require('../../assets/arrow.png')}
                        style={styles.backIcon}
                    />
                    <Text style={styles.backText}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.container}>{children}</View>
            </ScrollView>
            {loading && (
                <View style={styles.loadingContainer}>
                    <Image 
                        source={require('../../assets/loading.gif')}
                        style={styles.loadingImage}
                    />
                    <Text style={styles.loadingText}>Carregando o Ninjutsu...</Text>
                </View>
            )}
        </>
    )
}
// Componente para aplicar estilos padrão para abas específicas (renderização dependendo do conteúdo)

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#FFFBEB',
        zIndex: 10
    },
    loadingImage: {
        width: 100,
        height: 100
    },
    loadingText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1A1A1A'
    },
    back: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#4C7F4A' + '40',
        borderBottomWidth: 1,
        borderBottomColor: '#4C7F4A' + '60'
    },
    backIcon: {
        width: 20,
        height: 20,
        tintColor: '#4C7F4A'
    },
    backText: {
        fontSize: 16,
        color: '#4C7F4A',
        fontWeight: 'bold'
    },
    hidden: {
        height: 0,
        opacity: 0
    },
    show: {
        opacity: 1
    }
})

export default InnerWrapper
