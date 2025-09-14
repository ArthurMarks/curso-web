import { View, Text, Image, FlatList } from "react-native"
import styles from "../tools/styles"

const Clans = () => {
    return (
        <View>
            <Text>Texto básico sobre clãs</Text>
            <View>
                <Text>Container contendo lista de clãs</Text>
                <FlatList />
            </View>
        </View>
    )
}

export default Clans