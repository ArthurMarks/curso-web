import { View, Text, Image, FlatList } from "react-native"
import styles from "../tools/styles"

const Villages = () => {
    return (
        <View>
            <Text>Texto básico sobre vilas</Text>
            <View>
                <Text>Container contendo lista de vilas</Text>
                <FlatList />
            </View>
        </View>
    )
}

export default Villages