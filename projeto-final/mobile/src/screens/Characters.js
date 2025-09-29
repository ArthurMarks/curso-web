import { View, Text, Image, FlatList } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import styles from "../tools/styles"
import x from "../components/x"

const Characters = () => {
    const personagens = [
        { id: 1, nome: "Naruto Uzumaki" },
        { id: 2, nome: "Sasuke Uchiha" },
        { id: 3, nome: "Sakura Haruno" },
        { id: 4, nome: "Kakashi Hatake" },
        { id: 5, nome: "Hinata Hyuga" },
        { id: 6, nome: "Shikamaru Nara" },
        { id: 7, nome: "Temari" },
        { id: 8, nome: "Kankuro" },
        { id: 9, nome: "Iruka Umino" },
        { id: 10, nome: "Might Guy" },
        { id: 11, nome: "Neji Hyuga" },
        { id: 12, nome: "Rock Lee" },
        { id: 13, nome: "Tenten" },
        { id: 14, nome: "Jiraiya" },
        { id: 15, nome: "Tobirama Senju" },
        { id: 16, nome: "Minato Namikaze" },
        { id: 17, nome: "Kushina Uzumaki" },
        { id: 18, nome: "Hiruzen Sarutobi" },
        { id: 19, nome: "Danzo Shimura" },
        { id: 20, nome: "Madara Uchiha" },
        { id: 21, nome: "Obito Uchiha" },
        { id: 22, nome: "Itachi Uchiha" },
        { id: 23, nome: "Sasori" },
        { id: 24, nome: "Deidara" },
        { id: 25, nome: "Hidan" },
        { id: 26, nome: "Kakuzu" },
        { id: 27, nome: "Zetsu" },
        { id: 28, nome: "Karin Uzumaki" },
        { id: 29, nome: "Suigetsu Hozuki" },
        { id: 30, nome: "Juugo" },
        { id: 31, nome: "Kabuto Yakushi" },
        { id: 32, nome: "Nagato (Pain)" },
        { id: 33, nome: "Konan" },
        { id: 34, nome: "Kisame Hoshigaki" },
        { id: 35, nome: "Yamato" },
        { id: 36, nome: "Sai" },
        { id: 37, nome: "Asuma Sarutobi" },
        { id: 38, nome: "Anko Mitarashi" },
        { id: 39, nome: "Killer Bee" },
        { id: 40, nome: "Muu" },
        { id: 41, nome: "Genma Shiranui" },
        { id: 42, nome: "Aoba Yamashiro" },
        { id: 43, nome: "Orochimaru" },
        { id: 44, nome: "Chiyo" },
        { id: 45, nome: "Kiba Inuzuka" },
        { id: 46, nome: "Akamaru" },
        { id: 47, nome: "Shino Aburame" },
        { id: 48, nome: "Karin Uzumaki" },
        { id: 49, nome: "Tayuya" },
        { id: 50, nome: "Karin Uzumaki" }
    ];

    const Stack = createStackNavigator()

    return (
        <View>
            <View>
                <Text>Texto básico sobre personagens</Text>
                <View>
                    <Text>Container contendo lista de personagens</Text>

                </View>
            </View>
            <View>
                
            </View>
        </View>
    )
}

export default Characters
