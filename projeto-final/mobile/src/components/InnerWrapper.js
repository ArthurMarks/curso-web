import { useState, useEffect } from 'react'
import { View, ScrollView, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const InnerWrapper = ({ children, back }) => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading && (
                <View style={styles.loadingContainer}>
                    <Image 
                        source={require('../../assets/loading.gif')}
                        style={styles.loadingImage}
                    />
                    <Text>Carregando...</Text>
                </View>
            )}
            <ScrollView style={[styles.container, loading ? styles.hidden : styles.show]}>
                <TouchableOpacity onPress={() => navigation.navigate(back, { screen: 'tab' })} style={styles.back}>
                    <Image
                        source={require('../../assets/arrow.png')}
                        style={styles.backIcon}
                    />
                    <Text>Voltar</Text>
                </TouchableOpacity>
                {children}
            </ScrollView>
        </>
    )
}
/** Componente para aplicar estilos padrão para abas específicas (renderização dependendo do conteúdo) */

const styles = StyleSheet.create({
    container: {

    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        top: 0,
        left: 0
    },
    loadingImage: {
        width: 100,
        height: 100
    },
    back: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#f5ebe2ff'
    },
    backIcon: {
        width: 20,
        height: 20
    },
    hidden: {
        display: 'none'
    },
    show: {
        display: 'flex'
    },
})

export default InnerWrapper
