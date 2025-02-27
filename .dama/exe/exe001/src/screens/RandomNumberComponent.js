import { View, Button } from "react-native";

const RandomNumberComponent = () => {
    const generateRandomNumber = () => {
        const number = Math.floor(Math.random()*101)
        alert(number)
    }

    return (  
        <View>
            <Button title="Gerar número aleatório"
            onPress={generateRandomNumber}/>
        </View>
    )
}

export default RandomNumberComponent
