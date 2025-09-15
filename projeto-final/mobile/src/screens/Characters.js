import { View, Text, Image, FlatList } from "react-native"
import styles from "../tools/styles"

const Characters = () => {
    return (
        <View>
            <Text>Texto básico sobre personagens</Text>
            <View>
                <Text>Container contendo lista de personagens</Text>
                <FlatList />
            </View>
        </View>
    )
}

export default Characters
