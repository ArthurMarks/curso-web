import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import Navigator from './Navigator'
import Home from '../screens/Home'
import Character from '../screens/Character'
import Village from '../screens/Village'
import Clan from '../screens/Clan'
import Skill from '../screens/Skill'

const screens = [
    { name: 'character', component: Character },
    { name: 'village', component: Village },
    { name: 'clan', component: Clan },
    { name: 'skill', component: Skill }
]
/** Objeto de dados para renderização das abas principais (character, village, clan e skill), através do .map() */

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                const iconMap = {
                    home: 'home',
                    character: 'groups',
                    village: 'temple-hindu',
                    clan: 'shield',
                    skill: 'electric-bolt'
                }
                const iconName = iconMap[route.name]
                return <MaterialIcons name={iconName} color={color} size={25} />
            },
            tabBarActiveTintColor: '#A6886D',
            tabBarInactiveTintColor: '#bbb'
        })}>
            <Tab.Screen name="home" component={Home} />
            {screens.map(screen => (
                <Tab.Screen
                    key={screen.name}
                    name={screen.name}
                    children={() => <Navigator screenConfig={screen} />}
                />
            ))}
        </Tab.Navigator>
    )
}
// Componente que lida com o esquema de navegação entre abas principais (cada aba principal é definida por um ícone na parte inferior do aplicativo)

export default Tabs
