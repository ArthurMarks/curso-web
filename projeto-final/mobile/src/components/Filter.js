import { useQuery } from "../hooks/useQuery"
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from "react-native"
import Checkbox from 'expo-checkbox'

const Filter = ({ visible, close }) => {
    const { filters, toggleFilter, toggleSubFilter, clearFilter, hasActiveFilter } = useQuery()

    return (
        <Modal visible={visible} transparent animationType="fade">
            <Pressable onPress={close} style={styles.overlay}>
                <Pressable style={styles.container} onPress={() => { }}>
                    <View style={styles.checkboxContainer}>
                        <Text>Opções</Text>

                        <View style={styles.clear}>
                            {hasActiveFilter && (
                                <Pressable onPress={clearFilter}>
                                    <Text>Limpar Filtros</Text>
                                </Pressable>
                            )}
                        </View>

                        {Object.keys(filters).map(key => {
                            // Variáveis que lidam com ativação e formatação da palavra do filtro
                            const valueBoxActived = filters[key].enabled ?? filters[key]
                            const colorBoxActived = (filters[key].enabled ?? filters[key]) && '#A6886D'
                            const capitalizedWord = key.charAt(0).toUpperCase() + key.slice(1)

                            return (
                                <View key={key} style={styles.checkboxSpace}>
                                    <Checkbox
                                        value={valueBoxActived}
                                        onValueChange={() => toggleFilter(key)}
                                        color={colorBoxActived}
                                    />
                                    <Text>{capitalizedWord}</Text>
                                </View>
                            )
                        })}

                        <View style={[styles.checkboxContainer, { marginLeft: 20 }]}>
                            {filters.skill.enabled && Object.keys(filters.skill)
                                .filter(sub => sub != 'enabled')
                                .map(sub => {
                                    const valueBoxActived = filters.skill[sub]
                                    const colorBoxActived = filters.skill[sub] && '#A6886D'
                                    const formatWord = sub.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

                                    return (
                                        <View key={sub} style={styles.checkboxSpace}>
                                            <Checkbox
                                                value={valueBoxActived}
                                                onValueChange={() => toggleSubFilter(sub)}
                                                color={colorBoxActived}
                                            />
                                            <Text>{formatWord}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}
/** Componente de filtro, ocupa a tela inteira, fecha caso clicado no overlay e contém filtros específicos */

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
    }
})

export default Filter
