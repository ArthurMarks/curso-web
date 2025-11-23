import { useQuery } from '../hooks/useQuery'
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native'
import { useEffect } from 'react'
import Checkbox from 'expo-checkbox'

const Filter = ({ visible, close }) => {
    const {
        setSearchActive, tempFilters, setTempFilters, filters, toggleFilter, 
        toggleSubFilter, hasActiveFilter, clearTempFilters, applyTempFilters
    } = useQuery()

    const condition = hasActiveFilter(tempFilters)

    useEffect(() => {
        if (visible) setTempFilters(filters)
    }, [visible])

    const handleApply = () => {
        applyTempFilters()
        if (condition) setSearchActive(true)
        close()
    }

    return (
        <Modal visible={visible} transparent animationType='fade'>
            <Pressable onPress={close} style={styles.overlay}>
                <Pressable style={styles.container} onPress={() => { }}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Opções de Filtro</Text>
                        <Pressable
                            style={[styles.clearButton, condition ? styles.clearActive : styles.clearInactive]}
                            onPress={clearTempFilters}
                            disabled={!condition}
                        >
                            <Text style={condition ? styles.clearTextActive : styles.clearTextInactive}>Limpar Filtros</Text>
                        </Pressable>
                    </View>

                    <View style={styles.scrollContent}>
                        {Object.keys(tempFilters).map((key) => {
                            const valueBoxActived = tempFilters[key].enabled ?? tempFilters[key]
                            const colorBoxActived = valueBoxActived ? '#4AA5F0' : '#B0B0B0'
                            const capitalizedWord = key.charAt(0).toUpperCase() + key.slice(1)

                            return (
                                <View key={key} style={styles.checkboxSpace}>
                                    <Checkbox value={valueBoxActived} onValueChange={() => toggleFilter(key)} color={colorBoxActived} />
                                    <Text style={styles.checkboxText}>{capitalizedWord}</Text>
                                </View>
                            )
                        })}

                        {tempFilters.skill?.enabled && (
                            <View style={styles.subFilterContainer}>
                                <Text style={styles.subFilterTitle}>Tipo de Habilidade:</Text>
                                {Object.keys(tempFilters.skill)
                                    .filter((sub) => sub != 'enabled')
                                    .map((sub) => {
                                        const valueBoxActived = tempFilters.skill[sub]
                                        const colorBoxActived = valueBoxActived ? '#4AA5F0': '#B0B0B0'
                                        const formatWord = sub
                                            .split('_')
                                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                                            .join(' ')
                                        return (
                                            <View key={sub} style={styles.checkboxSpace}>
                                                <Checkbox value={valueBoxActived} onValueChange={() => toggleSubFilter(sub)} color={colorBoxActived} />
                                                <Text style={styles.checkboxText}>{formatWord}</Text>
                                            </View>
                                        )
                                    })}
                            </View>
                        )}
                    </View>
                    <Pressable style={styles.applyButton} onPress={handleApply}>
                        <Text style={styles.applyButtonText}>Aplicar Filtros</Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </Modal>
    )
}
// Componente que define a tela de filtro e todas as suas funcionalidades

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#000000dd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: '#FFFBEB',
        height: '75%',
        width: '85%',
        padding: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#B0B0B0', 
        shadowColor: '#1A1A1A',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#B0B0B0'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A1A1A'
    },
    scrollContent: {
        flex: 1,
        paddingBottom: 10
    },
    clearButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    clearActive: {
        backgroundColor: '#9B2226' + 'aa'
    },
    clearInactive: {
        backgroundColor: '#B0B0B0'
    },
    clearTextActive: {
        color: '#FFFFFF',
        fontSize: 12
    },
    clearTextInactive: {
        color: '#1A1A1A',
        fontSize: 12
    },
    checkboxSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 8
    },
    checkboxText: {
        fontSize: 16,
        color: '#1A1A1A'
    },
    subFilterContainer: {
        marginTop: 15,
        paddingLeft: 10,
        borderLeftWidth: 2,
        borderLeftColor: '#E97D21'
    },
    subFilterTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#1A1A1A'
    },
    applyButton: {
        backgroundColor: '#E97D21',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: '#E97D21',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5
    },
    applyButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Filter
