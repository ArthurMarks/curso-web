import { ScrollView } from "react-native"

const Wrapper = ({ children }) => {
    return (
        <ScrollView style={{
            // Aplique aqui os estilos
        }}>
            {children}
        </ScrollView>
    )
}
/** Componente para aplicar estilos padrão para as abas principais (personagens, vilas, clãs e habilidades) */

export default Wrapper
