import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.overlay}>
                    <Text style={styles.title}>Bem-vindo à Narutopedia</Text>
                    <Text style={styles.subtitle}>O seu guia completo sobre o universo ninja de Naruto.</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sinopse</Text>
                    <Text style={styles.sectionText}>
                        O mundo ninja de Naruto é um universo rico e complexo, repleto de personagens inesquecíveis, vilas ocultas, clãs lendários e habilidades de tirar o fôlego. Mergulhe nesta jornada para descobrir os segredos por trás dos jutsus e a história dos heróis e vilões que moldaram este mundo.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Explore os Oito Portões Internos</Text>
                    <Text style={styles.sectionText}>
                        Navegue por nossas seções e descubra tudo sobre o mundo de Naruto. Deixe a sua jornada ninja começar!
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Obrigado por visitar!</Text>
                    <Text style={styles.footerText}>Feito por: Bacelli, Lemes e Davi</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '  #F2F2F2',
    },
    card: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageHeader: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: '#D9B79A',
        textAlign: 'center',
        marginTop: 10,
    },
    content: {
        padding: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#A6886D',
    },
    sectionText: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
    footer: {
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    footerText: {
        fontSize: 14,
        color: '#888',
        lineHeight: 20,
    },
})

export default Home
