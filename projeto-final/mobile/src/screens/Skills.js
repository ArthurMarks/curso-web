import { View, Text, Image, FlatList } from "react-native"
import styles from "../tools/styles"

const Skills = () => {
    return (
        <View>
            <Text>Texto básico sobre habilidades</Text>
            <View>
                <Text>Container contendo lista de habilidades</Text>
                <FlatList />
            </View>
        </View>
    )
}

export default Skills