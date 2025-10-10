import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from "react-native"

const Filter = ({ visible, apply }) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <Pressable onPress={() => apply(false)} style={styles.overlay}>
                <Pressable style={styles.container} onPress={() => {}}>
                    <Text>Opções</Text>

                    <TouchableOpacity onPress={() => apply(false)}>
                        <Text>Aplicar</Text>
                    </TouchableOpacity>
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
        backgroundColor: '#fff',
        height: 200,
        width: '80%',
        gap: 10,
        padding: 10,
        borderRadius: 20
    },
})

export default Filter
