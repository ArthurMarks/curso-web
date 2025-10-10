import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import Navigator from './Navigator'

import Home from '../screens/Home'
import { 
    CharactersMain, CharacterDetail, VillagesMain, VillageDetail, 
    ClansMain, ClanDetail, SkillsMain, SkillDetail 
} from '../screens'

const screens = [
    { name: 'character', component: CharactersMain, subcomponent: CharacterDetail },
    { name: 'village', component: VillagesMain, subcomponent: VillageDetail },
    { name: 'clan', component: ClansMain, subcomponent: ClanDetail },
    { name: 'skill', component: SkillsMain, subcomponent: SkillDetail }
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
/** Componente que lida com o esquema de navegação entre abas principais e estilos de ícones delas */

export default Tabs
