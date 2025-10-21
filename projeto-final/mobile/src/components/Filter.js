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
                    <View style={styles.checkboxContainer}>
                        <Text>Opções</Text>
                        <View style={styles.clear}>
                            <Pressable
                                style={condition ? styles.show : styles.hidden}
                                onPress={clearTempFilters}
                                disabled={!condition}
                            >
                                <Text>Limpar Filtros</Text>
                            </Pressable>
                        </View>

                        {Object.keys(tempFilters).map((key) => {
                            const valueBoxActived = tempFilters[key].enabled ?? tempFilters[key]
                            const colorBoxActived = valueBoxActived && '#A6886D'
                            const capitalizedWord = key.charAt(0).toUpperCase() + key.slice(1)

                            return (
                                <View key={key} style={styles.checkboxSpace}>
                                    <Checkbox value={valueBoxActived} onValueChange={() => toggleFilter(key)} color={colorBoxActived} />
                                    <Text>{capitalizedWord}</Text>
                                </View>
                            )
                        })}

                        {tempFilters.skill.enabled && (
                            <View style={[styles.checkboxContainer, { marginLeft: 20 }]}>
                                {Object.keys(tempFilters.skill)
                                    .filter((sub) => sub !== 'enabled')
                                    .map((sub) => {
                                        const valueBoxActived = tempFilters.skill[sub]
                                        const colorBoxActived = valueBoxActived && '#A6886D'
                                        const formatWord = sub
                                            .split('_')
                                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                                            .join(' ')
                                        return (
                                            <View key={sub} style={styles.checkboxSpace}>
                                                <Checkbox value={valueBoxActived} onValueChange={() => toggleSubFilter(sub)} color={colorBoxActived} />
                                                <Text>{formatWord}</Text>
                                            </View>
                                        )
                                    })}
                            </View>
                        )}

                        <Pressable style={styles.show} onPress={handleApply}>
                            <Text>Aplicar</Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: '#00000067',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: '80%',
        width: '80%',
        gap: 10,
        padding: 10,
        borderRadius: 20
    },
    clear: {
        height: 20
    },
    checkboxContainer: {
        gap: 10
    },
    checkboxSpace: {
        flexDirection: 'row',
        gap: 10
    },
    show: {
        backgroundColor: '#F2D5BB',
        padding: 5
    },
    hidden: {
        backgroundColor: '#ccc',
        padding: 5
    }
})

export default Filter
