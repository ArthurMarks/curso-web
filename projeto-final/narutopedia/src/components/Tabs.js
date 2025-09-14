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
                let iconName
                const tab = route.name

                if (tab == 'Home') {
                    iconName = 'home'
                } else if (tab == 'Characters') {
                    iconName = 'groups'
                } else if (tab == 'Villages') {
                    iconName = 'temple-hindu'
                } else if (tab == 'Clans') {
                    iconName = 'shield'
                } else {
                    iconName = 'electric-bolt'
                }

                return <MaterialIcons name={iconName} color={color} size={25} />
            },
            tabBarActiveTintColor: '#A6886D',
            tabBarInactiveTintColor: '#bbb'
        })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Characters" component={Characters} />
            <Tab.Screen name="Villages" component={Villages} />
            <Tab.Screen name="Clans" component={Clans} />
            <Tab.Screen name="Skills" component={Skills} />
        </Tab.Navigator>
    )
}

export default Tabs
