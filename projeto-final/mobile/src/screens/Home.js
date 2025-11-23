import { View, Text, StyleSheet, ScrollView } from "react-native"

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
                    <Text style={styles.sectionTitle}>Explore o Mundo Shinobi</Text>
                    <Text style={styles.sectionText}>
                        Navegue pelas abas abaixo para descobrir a história detalhada de cada Personagem, as origens e Jutsus dos Clãs, a hierarquia das Vilas e o poder das Habilidades. Use o filtro na barra de pesquisa para encontrar exatamente o que procura. Deixe a sua jornada ninja começar!
                    </Text>
                </View>
                <View style={styles.highlightCard}>
                    <Text style={styles.highlightText}>
                        "A falha não é razão para desistir, desde que você acredite nela." - Naruto Uzumaki
                    </Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Obrigado por visitar a Narutopedia!</Text>
                    <Text style={styles.footerTeamText}>Desenvolvido por: Bacelli, Lemes e Davi</Text>
                </View>
            </View>
        </ScrollView>
    )
}
// Aba de introdução do aplicativo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBEB'
    },
    card: {
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9B2226', 
        shadowColor: '#333333',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 10,
        marginBottom: 10
    },
    imageHeader: {
        width: '100%',
        height: '100%'
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#9B2226' + 'aa'
    },
    title: {
        fontSize: 34,
        fontWeight: '900',
        textAlign: 'center',
        color: '#FFFFFF',
        letterSpacing: 1.5,
        textShadowColor: '#333333',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3
    },
    subtitle: {
        fontSize: 18,
        color: '#4AA5F0', 
        textAlign: 'center',
        marginTop: 10,
        fontWeight: 'bold'
    },
    content: {
        padding: 20
    },
    section: {
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#1A1A1A' + '15',
        paddingBottom: 20
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: '800',
        marginBottom: 10,
        color: '#E97D21', 
        textTransform: 'uppercase'
    },
    sectionText: {
        fontSize: 16,
        color: '#1A1A1A',
        lineHeight: 24
    },
    highlightCard: {
        backgroundColor: '#E97D21' + '20',
        padding: 15,
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: '#E97D21', 
        marginVertical: 10
    },
    highlightText: {
        fontStyle: 'italic',
        fontSize: 15,
        color: '#1A1A1A',
        textAlign: 'center'
    },
    footer: {
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#1A1A1A' + '20',
        marginBottom: 20
    },
    footerText: {
        fontSize: 14,
        color: '#1A1A1A',
        fontWeight: '600',
        lineHeight: 20
    },
    footerTeamText: {
        fontSize: 12,
        color: '#333333',
        marginTop: 5
    }
})

export default Home
