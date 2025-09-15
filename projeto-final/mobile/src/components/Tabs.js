import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import Home from '../screens/Home'
import Characters from '../screens/Characters'
import Villages from '../screens/Villages'
import Clans from '../screens/Clans'
import Skills from '../screens/Skills'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => {
                const iconMap = {
                    home: 'home',
                    characters: 'groups',
                    villages: 'temple-hindu',
                    clans: 'shield',
                    skills: 'electric-bolt'
                }

                const iconName = iconMap[route.name]

                return <MaterialIcons name={iconName} color={color} size={25} />
            },
            tabBarActiveTintColor: '#A6886D',
            tabBarInactiveTintColor: '#bbb'
        })}>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="characters" component={Characters} />
            <Tab.Screen name="villages" component={Villages} />
            <Tab.Screen name="clans" component={Clans} />
            <Tab.Screen name="skills" component={Skills} />
        </Tab.Navigator>
    )
}

export default Tabs
